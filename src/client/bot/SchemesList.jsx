import React from "react";

export default function SchemesList(props) {
  return (
    <div>
      <div class="schemes-section">
        <div class="schemes-title">
          <h1>`${props.title}`</h1>
        </div>
        <div class="section_container">
          <div class="schemes-description">`${props.description}`</div>
          <div class="other-info">
            <ul>
              <li>Microsites</li>
              <li>Multilingual CMS solutions</li>
              <li>Interactive applications</li>
              <li>Portals</li>
              <li>Platforms</li>
              <li>Scalable backend infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
