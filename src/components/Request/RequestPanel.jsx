import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RequestTabs from "../RequestTabs";
import toObject, { reverseToKeyValue } from "../../utils/toObject";
import Form from "../Form";
import axios from "axios";
import { useToast } from '@chakra-ui/react'

const initialKeyValueState = () => [
  {
    id: uuidv4(),
    key: "",
    value: "",
  },
];

const initialURLState = "https://jsonplaceholder.typicode.com/posts/1";

const detectType = (data) => {
  if (typeof data == "object") {
    return JSON.stringify(data, null, 2);
  }
  return data;
};

const validBody = (data) => {
  const DataLen = Object.entries(data).length > 0;

  if (DataLen) return JSON.stringify(data, null, 2);
  return "{\n\t\n}";
};

const RequestPanel = ({
  setResponse,
  sendingState,
//   setHistory,
  initialRequest,
}) => {
  const [sending, setSending] = sendingState;
  const [URL, setURL] = useState(initialURLState);
  const [method, setMethod] = useState("GET");
  const [queryParams, setQueryParams] = useState(initialKeyValueState);
  const [headers, setHeaders] = useState(initialKeyValueState);

  const [initialBody, setInitialBody] = useState("{\n\t\n}");
  const [body, setBody] = useState(initialBody);
  const toast = useToast()

  const onSendRequest = async (e) => {
    e.preventDefault();
    setSending(true);
    
    let data
    try {
      data = JSON.parse(body.toString())
    } catch (err) {
      setSending(false);
      return alert("Something wrong with json data !")
    }
    
    let time = new Date().getTime()
    try {
      const request = {
        url: URL.trim(),
        method,
        headers: toObject(headers),
        params: toObject(queryParams),
        data,
        id : uuidv4()
      };

      const response = await axios(request);

      setResponse({
        ...response,
        data : detectType(response?.data)
      });

    //   saveToHistory(request, setHistory)
    } catch (err) {
      time = new Date().getTime() - time
      setResponse({ status : 404, customData : {time}, data : "" });
      console.log(err)
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (initialRequest) {
      try {
        setURL(initialRequest.url)
        setMethod(initialRequest.method)
        setQueryParams(reverseToKeyValue(initialRequest.params))
        setHeaders(reverseToKeyValue(initialRequest.headers))
        setInitialBody(validBody(initialRequest.data))
        setBody(validBody(initialRequest.data))

        toast({
            title: 'done',
            description: "success",
        })
      } catch (err) {
       toast({title: "error"})
      } 
    }
  }, [ initialRequest ])

  return (
    <>
    <div className="m-4">
    <Form
          urlState={[URL, setURL]}  
          methodState={[method, setMethod]} 
          sending={sending}
          onSendRequest={onSendRequest}
          />
    <RequestTabs
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        headers={headers}
        setHeaders={setHeaders}
        body={initialBody}
        setBody={setBody}
        />
        </div>
    </>
  );
};

export default RequestPanel;
