import React from "react";

export default function HomePageLayout(props) {
  return (
    <main className="HomePage_Layout">
      <div className="HomePage_Layout_Inner">{props.children}</div>
    </main>
  );
}
