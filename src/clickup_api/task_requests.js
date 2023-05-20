import { Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export default function TaskRequests() {
  const [taskResponse, setTaskResponse] = useState([]);

  async function GetTask() {
    const query = new URLSearchParams({
      archived: "false",
      //   page: "0",
      //   order_by: "string",
      //   reverse: "true",
      //   subtasks: "true",
      //   statuses: "string",
      //   include_closed: "true",
      //   assignees: "string",
      //   tags: "string",
      //   due_date_gt: "0",
      //   due_date_lt: "0",
      //   date_created_gt: "0",
      //   date_created_lt: "0",
      //   date_updated_gt: "0",
      //   date_updated_lt: "0",
      //   date_done_gt: "0",
      //   date_done_lt: "0",
      //   custom_fields: "string",
    }).toString();

    const listId = 900901321502;

    await fetch(`https://api.clickup.com/api/v2/list/${listId}/task?${query}`, {
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_CLICKUP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((json) => setTaskResponse(json))
      .catch((error) => console.log(error));
  }

  function GetTasks() {}

  function GetFilteredTasks() {}

  function GetTaskTimeInStatus() {}

  function GetTasksTimeInStatus() {}

  function CreateTask() {}

  function UpdateTask() {}

  function DeleteTask() {}
  return (
    <Container>
      <Button
        onClick={() => {
          GetTask();
        }}
      >
        Send Task Request
      </Button>
      {taskResponse ? (
        <pre>{JSON.stringify(taskResponse, null, 2)}</pre>
      ) : (
        "Loading..."
      )}
    </Container>
  );
}
