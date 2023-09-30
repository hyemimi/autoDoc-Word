import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import { IFormDataProps } from '@Types/Form';
import * as docData from 'utils/docData';

const loadFile = (url: string, callback: (error: Error, data: string) => void) => {
  PizZipUtils.getBinaryContent(url, callback);
};

/** word 파일 생성 */
const generateDocument = ({ 
  // 공통 부분
  name,
  position,
  joiningDate,
  RRN,
  phone,
  address,
  etc = '',
  // Only 재직증명서
  job,
  workingDepart,
  text1,
  // Only 사직원
  affiliation,
  leavingDate,
  selection,
  email,
  emergency,
  relationship,
  confirm }:IFormDataProps, url: string, title: string) => {

  /**입사 일자  */
  const { joiningYear, joiningMonth, joiningDay } = docData.getJoiningDate(joiningDate);
  /** 재직 기간 */
  const { yearPeriod, monthPeriod } = docData.getPeriod({ joiningYear, joiningMonth, joiningDay });
  /** 이메일 */
  const indexOfAt = email?.indexOf('@');
  const emailID = email?.slice(0, indexOfAt);
  const emailAddr = email?.slice(indexOfAt + 1);
  /** 사유 선택  */ 
  const [ r1, r2, r3, r4, r5, r6, r7, r8 ] = docData.getSelectionSquares(selection);

  const setData = title === 'certification' ? { 
    // certification 일 경우, 전달되는 data
    name, position, etc,
    joiningDate, // 입사일자
    RRN, // 주민번호
    phone, address, job, workingDepart, text1,
    today: docData.getToday().today,
    year1: joiningYear, // 입사년도
    month1: joiningMonth, // 입사월
    day1: joiningDay, // 입사일
    year3: yearPeriod,
    month3: monthPeriod
  } : {
    // resignation 일 경우, 전달되는 data
    name, position, etc,
    joiningDate, // 입사일자
    RRN, // 주민번호
    phone, address, affiliation, leavingDate, emailID, emailAddr, 
    emergency, relationship,
    r1, r2, r3, r4, r5, r6, r7, r8, // 사유 선택
    today: docData.getToday().today,
    signature: docData.getFooterSign(name,confirm).signatureString,
    confirm: docData.getFooterSign(name,confirm).confirmString
  };

  loadFile(
    url,
    async (error, content) => {
      if (error) {
        throw error;
      }
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true
      });

      doc.setData(setData);
      try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render();
      } catch (error) {
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
        const replaceErrors = (key: number, value:Error) => {
          if (value instanceof Error) {
            return Object.getOwnPropertyNames(value).reduce((error, key) => {
              error[key] = value[key];

              return error;
            }, {});
          }

          return value;
        };
        console.log(JSON.stringify({ error: error }, replaceErrors));

        if (error.properties && error.properties.errors instanceof Array) {
          const errorMessages = error.properties.errors
            .map((error) => {
              return error.properties.explanation;
            })
            .join('\n');
          console.log('errorMessages', errorMessages);
          // errorMessages is a humanly readable message looking like this :
          // 'The tag beginning with "foobar" is unopened'
        }
        throw error;
      }
      const out = doc.getZip().generate({
        type: 'blob',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      }); 
      /*  let arrayBuffer;
      const fileReader = new FileReader();
      fileReader.onload = function(event) { arrayBuffer = event.target?.result; }; 
      console.log(fileReader.readAsArrayBuffer(out));
      arrayBuffer = fileReader.result;
      console.log(arrayBuffer); */

      saveAs(out, `${title}_${name}.docx`);

      //const input = URL.createObjectURL(out).slice(5);
      //zip.add("PDFReport.pdf", result);
      //content = zip.generate();
      //const arrayBuffer = fetch(URL.createObjectURL(out)).then(res => {return res.arrayBuffer();});
      //docxConverter(arrayBuffer,'output.pdf',(err, result) => { if (err) {console.log(err);} console.log('result = ' + result )});
      //docxConverter()
    }
  );
};

export default generateDocument;

/*  const blobSupported = new Blob(['a']).size === 2;
      console.log(blobSupported);

      const reader = new FileReader();
      reader.onload = () => {
        const base64data = reader.result;
        console.log(base64data);
      };
      reader.readAsDataURL(out);
      console.log(convert2PDF(content));
      /* const blobUrl = URL.createObjectURL(out);
      pspdfkit.load ({document: blobUrl })
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'output.pdf';
      link.setAttribute('download', 'output.pdf');
      document.body.append('a');
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl); 
      //libre.convertWithOptions(out, undefined, undefined, undefined,(error) => console.log(error));
     
      //Output the document using Data-URI
      // const pdf = new File([out.output('blob')], 'output.pdf', {
      //   type: 'application/pdf'
      // });
      /* const pdfBuf = await libre.convert(out,'.pdf',undefined,undefined);

      await writeFile('output.pdf',pdfBuf,undefined,(error) => {console.log(error); });
      //console.log(doc);
      //console.log(out);
      /*  const test = convert2PDF(out).catch(console.error);
      console.log(test); 
      //saveAs(out, 'output.pdf'); 
      */
/*  unoconv.convert(`${title}.docx`, 'pdf', (err, result) => {
        // result is returned as a Buffer
        writeFile('converted.pdf', result,undefined);
        console.log(result);
      }); */
/*  const blob = new Blob( [ out ], { type: 'application/pdf' } );
      const docUrl = URL.createObjectURL( blob );
      window.open(docUrl); 
*/