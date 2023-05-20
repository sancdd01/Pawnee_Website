import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { createWorkOrder } from "../utilities";

export default function WorkOrders() {
  const tasks = useLoaderData();
  const [newWorkOrder, setNewWorkOrder] = useState("");
  const [currWO, setCurrWO] = useState(tasks);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const getMyWO = async () => {
    setCurrWO(await createWorkOrder(newWorkOrder));
    setFormSubmitted(true);
  };

  // const success = () => {};

  return (
    <div>
      <div className="wo-header">
        <h2>Let Us Know How We Can Make Pawnee Better!!</h2>
      </div>

      <div className="wo-container">
        <div>
          <form
            onSubmit={(e) => [
              e.preventDefault(),
              getMyWO(),
              setNewWorkOrder(""),
            ]}
          >
            <input
              type="text"
              placeholder="How Can We Help?"
              value={newWorkOrder}
              onChange={(e) => setNewWorkOrder(e.target.value)}
            />
            <input type="submit" />
          </form>
          {/* <ol>
        {currWO.map((task) => (
          <li>{task.title}</li>
        ))}
      </ol> */}
        </div>
        {formSubmitted && (
          <div className="hide-div">
            <h2>Thanks for letting us know!!</h2>
            <span>
              Head over to our Department Page and see what we're working on.
            </span>
            <a href="#/department">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
