import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const documentation = () => {
  return (
    <>
      <div className="docmentation">
        <Container>
          <div className="doc_heading">
            <div>
              <h1 className="doc_title"> Documentations</h1>
            </div>
          </div>
          <div className="doc_description">
            <div className="doc_description_para">
              <p>
                {" "}
                The list below gives you the 1000 most frequently used 
          
              </p>
              <p>
                {" "}
                The list below gives you frequently used es you the git 
         
              </p>
            </div>
          </div>
          <div className="doc_search">
            <div className="doc_wrapper">
              {/* <div className="label">Submit your search</div> */}
              <div className="doc_searchBar">
                <input
                  id="doc_searchQueryInput"
                  type="text"
                  name="doc_searchQueryInput"
                  placeholder="Search documentations"
                  // value=""
                />
                <button
                  id="doc_searchQuerySubmit"
                  type="submit"
                  name="doc_searchQuerySubmit"
                >
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <path
                      fill="#bcbcbc"
                      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="doc_route">
          <ul className="doc_list">
            <li>
              {" "}
              <Link href="#lorem1" className="doc_link_routes">
                LOREM IPSUM 
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#lorem2" className="doc_link_routes">
                LOREM IPSUM
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#lorem3" className="doc_link_routes">
                LOREM IPSUM
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#lorem4" className="doc_link_routes">
                LOREM IPSUM
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#lorem5" className="doc_link_routes">
                LOREM IPSUM
              </Link>
            </li>
            <li>
              {" "}
              <Link href="" className="doc_link_routes">
                LOREM IPSUM
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#lorem6" className="doc_link_routes">
                LOREM IPSUM
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#lorem1" className="doc_link_routes">
                LOREM IPSUM
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <div id="lorem1">
            <div className="main-section" id="Introduction">
              <h4 className="doc_header-title my-4">Introduction</h4>
          
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <ul className="pb-5">
                <li>
                  Client-side JavaScript extends the core language by supplying
                  objects to control a browser and its Document Object Model
                  (DOM). For example, client-side extensions allow an
                  application to place elements on an HTML form and respond to
                  user events such as mouse clicks, form input, and page
                  navigation.
                </li>
                <li>
                  Server-side JavaScript extends the core language by supplying
                  objects relevant to running JavaScript on a server. For
                  example, server-side extensions allow an application to
                  communicate with a database, provide continuity of information
                  from one invocation to another of the application, or perform
                  file manipulations on a server.
                </li>
              </ul>
            </div>
          </div>
          <div id="lorem2">
            <div className="main-section" id="Introduction">
              <h4 className="doc_header-title my-4">Analistics</h4>
            
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <ul className="pb-5">
                <li>
                  Client-side JavaScript extends the core language by supplying
                  objects to control a browser and its Document Object Model
                  (DOM). For example, client-side extensions allow an
                  application to place elements on an HTML form and respond to
                  user events such as mouse clicks, form input, and page
                  navigation.
                </li>
                <li>
                  Server-side JavaScript extends the core language by supplying
                  objects relevant to running JavaScript on a server. For
                  example, server-side extensions allow an application to
                  communicate with a database, provide continuity of information
                  from one invocation to another of the application, or perform
                  file manipulations on a server.
                </li>
              </ul>
            </div>
          </div>
          <div id="lorem3">
            <div className="main-section" id="Introduction">
             
              <h4 className="doc_header-title my-4">Source</h4>
           
              
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <ul className="pb-5">
                <li>
                  Client-side JavaScript extends the core language by supplying
                  objects to control a browser and its Document Object Model
                  (DOM). For example, client-side extensions allow an
                  application to place elements on an HTML form and respond to
                  user events such as mouse clicks, form input, and page
                  navigation.
                </li>
                <li>
                  Server-side JavaScript extends the core language by supplying
                  objects relevant to running JavaScript on a server. For
                  example, server-side extensions allow an application to
                  communicate with a database, provide continuity of information
                  from one invocation to another of the application, or perform
                  file manipulations on a server.
                </li>
              </ul>
            </div>
          </div>
          <div id="lorem4">
            <div className="main-section" id="Introduction">
          
              <h4 className="doc_header-title my-4">Development</h4>
      
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <ul className="pb-5">
                <li>
                  Client-side JavaScript extends the core language by supplying
                  objects to control a browser and its Document Object Model
                  (DOM). For example, client-side extensions allow an
                  application to place elements on an HTML form and respond to
                  user events such as mouse clicks, form input, and page
                  navigation.
                </li>
                <li>
                  Server-side JavaScript extends the core language by supplying
                  objects relevant to running JavaScript on a server. For
                  example, server-side extensions allow an application to
                  communicate with a database, provide continuity of information
                  from one invocation to another of the application, or perform
                  file manipulations on a server.
                </li>
              </ul>
            </div>
          </div>
          <div id="lorem5">
            <div className="main-section" id="Introduction">
         
              <h4 className="doc_header-title my-4">Summary</h4>
   
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <ul className="pb-5">
                <li>
                  Client-side JavaScript extends the core language by supplying
                  objects to control a browser and its Document Object Model
                  (DOM). For example, client-side extensions allow an
                  application to place elements on an HTML form and respond to
                  user events such as mouse clicks, form input, and page
                  navigation.
                </li>
                <li>
                  Server-side JavaScript extends the core language by supplying
                  objects relevant to running JavaScript on a server. For
                  example, server-side extensions allow an application to
                  communicate with a database, provide continuity of information
                  from one invocation to another of the application, or perform
                  file manipulations on a server.
                </li>
              </ul>
            </div>
          </div>
          <div id="lorem6">
            <div className="main-section" id="Introduction">
      
              <h4 className="doc_header-title my-4">Index</h4>
          
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <p>
                JavaScript is a cross-platform, object-oriented scripting
                language. It is a small and lightweight language. Inside a host
                environment (for example, a web browser), JavaScript can be
                connected to the objects of its environment to provide
                programmatic control over them.
              </p>
              <p>
                JavaScript contains a standard library of objects, such as
                Array, Date, and Math, and a core set of language elements such
                as operators, control structures, and statements. Core
                JavaScript can be extended for a variety of purposes by
                supplementing it with additional objects; for example:
              </p>
              <ul className="pb-5">
                <li>
                  Client-side JavaScript extends the core language by supplying
                  objects to control a browser and its Document Object Model
                  (DOM). For example, client-side extensions allow an
                  application to place elements on an HTML form and respond to
                  user events such as mouse clicks, form input, and page
                  navigation.
                </li>
                <li>
                  Server-side JavaScript extends the core language by supplying
                  objects relevant to running JavaScript on a server. For
                  example, server-side extensions allow an application to
                  communicate with a database, provide continuity of information
                  from one invocation to another of the application, or perform
                  file manipulations on a server.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default documentation;
