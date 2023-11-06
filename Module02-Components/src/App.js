import { Random } from "mockjs";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
import Message from "./components/Message";
import Segment from "./components/Segment";

function App() {
  return (
    <>
      <div className="ui container">
        <Message header={Random.sentence(1, 3)} text={Random.paragraph(2)} />

        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author={Random.first()}
            avatar={Random.dataImage("200x200")}
            time={Random.date("A h:m")}
            content={Random.sentence(3, 5)}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author={Random.first()}
            avatar={Random.dataImage("200x200")}
            time={Random.date("A h:m")}
            content={Random.sentence(3, 5)}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author={Random.first()}
            avatar={Random.dataImage("200x200")}
            time={Random.date("A h:m")}
            content={Random.sentence(3, 5)}
          />
        </ApprovalCard>

        <Segment>
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer.
          </div>
          <div className="ui primary button">Add Document</div>
        </Segment>

        <Segment>
          <h4 className="ui header">For Your Information</h4>
          <p>{Random.paragraph(2)}</p>
        </Segment>
      </div>
    </> 
  );
}

export default App;
