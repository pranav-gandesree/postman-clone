// import Form from "../components/Form"
// import RequestTabs from "../components/RequestTabs"

import { useEffect, useState } from "react";
import RequestPanel from "../components/Request/RequestPanel";
import ResponsePanel from "../components/Response/ResponsePanel";

const HomePage = () => {
  const [initialRequest, setInitialRequest] = useState(null)
  const initialResponse = { data : "{\n\t\n}", atFirst : true}
  const [data, setData] = useState(initialResponse);
  const [sending, setSending] = useState(false);


  return (
    <>
      {/* <Form/>
      <RequestTabs/> */}
       <RequestPanel setResponse={setData} sendingState={[sending, setSending]} initialRequest={initialRequest} />
       <ResponsePanel response={data}/>
    </>
  )
}

export default HomePage
