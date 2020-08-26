import React from "react";

const OperationLog = ({log}) => {
    return (
      <tr>
        <td>{log.description}</td>
        <td>{log.operatedAt}</td>
      </tr>
    );

}
export default OperationLog