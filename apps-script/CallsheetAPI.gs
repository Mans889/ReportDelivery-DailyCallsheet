const CALLSHEET_API_TOKEN = PropertiesService.getScriptProperties().getProperty('CALLSHEET_API_TOKEN');
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    if (!CALLSHEET_API_TOKEN || body.token !== CALLSHEET_API_TOKEN) return json_({ok:false,message:'Unauthorized'});
    switch (body.action) {
      case 'health': return json_({ok:true,service:'Daily Callsheet API'});
      case 'bootstrap': return json_(getBootstrapData());
      case 'submit': return json_(submitData(body.payload));
      case 'status': return json_(getJobStatus(body.payload && body.payload.jobId));
      default: return json_({ok:false,message:'Action tidak dikenal'});
    }
  } catch (err) { return json_({ok:false,message:String(err.message || err)}); }
}
function json_(value){ return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }
