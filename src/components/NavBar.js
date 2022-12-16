import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksPage = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  }
  
  )

  return <nav>{linksPage}</nav>;
}

export default NavBar;
