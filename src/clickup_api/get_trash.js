import { Button, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";

/////////
//launch Chrome with web security disabled from terminal:
//open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security
////////
//get bearer token from trash request in ClickUp
//can I get a perminent one with custom app token???
////////
//choose query params (at least 1)
//response is {'has more': true/false, {'data': [{...}]}, 'paging':
///////////////////{start_id:'itemId', start_type: "...", start_date_deleted: "millisecondtime"}}

export default function GetTrash() {
  const [trash, setTrash] = useState([]);

  const query = new URLSearchParams({
    name: "",
    // start_date_deleted: "1682005643110", //6 days starting frmo this date back
    // "type[]": [
    //   "task",
    //   "subtask",
    //   "subcategory",
    //   "category",
    //   "project",
    //   "doc",
    //   "conversation",
    //   "page",
    //   "field",
    //   "dashboard",
    //   "projectTag",
    //   "form",
    //   "reminder",
    //   "timeEntry",
    // ],
  }).toString();

  function Get() {
    fetch(`https://app.clickup.com/trash/v1/team/36226095/trash?${query}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo1NDA5ODc0MCwidmFsaWRhdGVkIjp0cnVlLCJ3c19rZXkiOjEzMDc4Mzc2NzMsInNlc3Npb25fdG9rZW4iOnRydWUsImlhdCI6MTY4MjY1NTgwOSwiZXhwIjoxNjgyODI4NjA5fQ.kphWq6SMQP0fDXE1yScsWcvHh_chnALoVSJGtwJw06k",
      },
    })
      .then((response) => response.json())
      .then((json) => setTrash(json))
      .catch((error) => console.error(error));
  }

  return (
    <Container>
      <Button
        onClick={() => {
          Get();
        }}
      >
        GET TRASH
      </Button>
      {trash ? (
        <pre>{JSON.stringify(trash["data"], null, 2)}</pre>
      ) : (
        "Loading..."
      )}
    </Container>
  );
}
