import React from "react";
import { Link } from "react-router-dom";
// import useTitle from "../Hooks/useTitle";

const Blog = () => {
  // useTitle("blog")
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://miro.medium.com/max/1400/1*mjbPUUeSgPTgg3M1gic_xA.png"
            alt=""
            className=" object-center w-full lg:h-full rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              What are the different ways to manage a state in a React
              application?
            </h3>
            <span className="text-xs dark:text-gray-400">
              November 28, 2022
            </span>
            <p className=" mx-auto mb-2 text-gray-700">
              There are several other ways to manage state​s in React, including
              the use of: Hooks, React Context API, Apollo Link State. There are
              four main types of state you need to properly manage in your React
              apps:
              <li>
                Local (UI) state – Local state is data we manage in one or
                another component. Local state is most often managed in React
                using the useState hook.
              </li>
              <li>
                Global (UI) state – Global state is data we manage across
                multiple components. Global state is necessary when we want to
                get and update data anywhere in our app, or in multiple
                components at least.
              </li>
              <li>
                Server state – Data that comes from an external server that must
                be integrated with our UI state. Server state is a simple
                concept, but can be hard to manage alongside all of our local
                and global UI state.
              </li>
              <li>
                URL state – Data that exists on our URLs, including the pathname
                and query parameters. URL state is often missing as a category
                of state, but it is an important one. In many cases, a lot of
                major parts of our application rely upon accessing URL state.
                Try to imagine building a blog without being able to fetch a
                post based off of its slug or id that is located in the URL!
              </li>
            </p>
          </div>
        </Link>
      </div>
      <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://miro.medium.com/max/1042/1*ULmG2uiAlgQksjj-brp2fw.jpeg"
            alt=""
            className=" object-center w-full lg:h-full rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              How does prototypical inheritance work?
            </h3>
            <span className="text-xs text-gray-400">
              November 28, 2022
            </span>
            <p className=" mx-auto mb-2 text-gray-700">
              JavaScript is a prototype-based language, meaning object
              properties and methods can be shared through generalized objects
              that have the ability to be cloned and extended. When it comes to
              inheritance, JavaScript has only one structure: objects. Each
              object has a private property (referred to as its [[Prototype]])
              that maintains a link to another object called its prototype. That
              prototype object has its own prototype, and so on until an object
              whose prototype is null is reached.
              <p>
                When it comes to inheritance, JavaScript only has one construct:
                objects. Each object has a private property which holds a link
                to another object called its prototype. That prototype object
                has a prototype of its own, and so on until an object is reached
                with null as its prototype. By definition, null has no
                prototype, and acts as the final link in this prototype chain.
                It is possible to mutate any member of the prototype chain or
                even swap out the prototype at runtime, so concepts like static
                dispatching do not exist in JavaScript.
              </p>
            </p>
          </div>
        </Link>
      </div>
      <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://blog.autify.com/static/84ac8b56a04924ac3a0f6a5dd94b3df3/3b2f8/unit-testing-life-cycle.png"
            alt=""
            className=" object-center w-full lg:h-full rounded sm:h-96 lg:col-span-7 bg-gray-500 "
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              What is a unit test? Why should we write unit tests?
            </h3>
            <span className="text-xs text-gray-400">
              November 28, 2022
            </span>
            <p className=" mx-auto mb-2 text-gray-700">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
              <li>
                Unit testing is a software development process in which the
                smallest testable parts of an application, called units, are
                individually and independently scrutinized for proper operation.
              </li>
              <li>
                A unit test typically comprises of three stages: plan, cases and
                scripting and the unit test itself. In the first step, the unit
                test is prepared and reviewed. The next step is for the test
                cases and scripts to be made, then the code is tested.
                Test-driven development requires that developers first write
                failing unit tests. Then they write code and refactor the
                application until the test passes. TDD typically results in an
                explicit and predictable code base.
              </li>
              <p>
                <h2 className="font-bold ">
                  {" "}
                  Let’s look at some of the advantages of unit testing:
                </h2>
                <li>
                  You can test units or functions of your project in isolation.
                </li>
                <li>Unit tests act as documentation for your code.</li>
                <li>
                  They enable you to catch bugs early in the development
                  process.
                </li>
                <li>
                  Automated unit tests help a great deal with regression
                  testing.
                </li>
                <li>
                  They detect code smells in your codebase. For example, if
                  you’re having a hard time writing unit tests for a piece of
                  code, it might be a sign that your function is too complex.
                </li>
                <li>They contribute to higher code quality. </li>
              </p>
            </p>
          </div>
        </Link>
      </div>
      <div className="container  p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://s3.eu-central-1.amazonaws.com/pleo-digital/blog/2021-09-28_Angular-React-Vue_table_en.png"
            alt=""
            className=" object-center w-full lg:h-full rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              React vs. Angular vs. Vue?
            </h3>
            <span className="text-xs dark:text-gray-400">
              November 28, 2022
            </span>
            <p className=" mx-auto mb-2 text-gray-700">
              The answer to the debate of Angular vs React vs Vue is that
              there’s no absolute right choice, a conclusion that you probably
              expected. Each of these libraries has its own benefits and
              drawbacks. Based on the project you’re working on and your
              individual requirements, one of these is going to be more suitable
              than the others. It’s always key to do your own research before
              deciding, especially if you’re going to be working on a business
              venture and not on a personal project.
              <p>
                <li>
                  <span className="font-bold">Angular:</span> Angular is the
                  most mature of the frameworks, has good backing in terms of
                  contributors and is a complete package. However, the learning
                  curve is steep and concepts of development in Angular may put
                  off new developers. Angular is a good choice for companies
                  with large teams and developers who already use TypeScript.
                </li>
                <li>
                  <span className="font-bold">React</span> React is just old
                  enough to be mature and has a huge number of contributions
                  from the community. It has gained widespread acceptance. The
                  job market for React is really good, and the future for this
                  framework looks bright. React looks like a good choice for
                  someone getting started with front-end JavaScript frameworks,
                  startups, and developers who like some flexibility. The
                  ability to integrate with other frameworks seamlessly gives it
                  a great advantage for those who would like some flexibility in
                  their code.
                </li>
                <li>
                  <span className="font-bold">Vue</span> Vue is newest to the
                  arena, without the backing of a major company. However, it has
                  done really well in the last few years to come out as a strong
                  competitor for Angular and React, and especially so with the
                  release of Vue 3.0. This is perhaps playing a role with a lot
                  of Chinese giants like Alibaba and Baidu picking Vue as their
                  primary front-end JavaScript framework. Vue should be your
                  choice if you prefer simplicity, but also like flexibility.
                </li>
              </p>
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
