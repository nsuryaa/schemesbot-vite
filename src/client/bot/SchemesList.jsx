import React from "react";
import { useState, useEffect } from "react";
export default function SchemesList(props) {
  console.log(props);

  // let scheme = JSON.parse(props.state.data);
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    if (props.state.data) {
      setIsDataAvailable(true);
      setSchemes(JSON.parse(props.state.data));
    }
  }, [props.state.data]);

  if (!isDataAvailable) {
    // Render null if data is not available yet
    return null;
  }
  return schemes.map((scheme, key) => {
    return (
      <div className="schemes-section" key={key}>
        <div className="schemes-title">
          <h1>{`${scheme.scheme_details.title_name}`}</h1>
        </div>
        <div className="section_container">
          <div className="schemes-description">{`${scheme.description}`}</div>
          <div className="other-info">
            <ul>
              <li>
                Benefits types : {`${scheme.scheme_details.benefits_types}`}
              </li>
              <li>Multilingual CMS solutions</li>
              <li>Interactive applications</li>
              <li>Portals</li>
              <li>Platforms</li>
              <li>Scalable backend infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    );
  });
}
