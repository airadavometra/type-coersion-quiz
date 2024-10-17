import classNames from "classnames";
import { Code } from "../../components/Code/Code";
import { Link } from "../../components/Link/Link";
import WidthContainer from "../../components/WidthContainer/WidthContainer";
import s from "./Cheatsheet.module.css";

export const CheatsheetPage = () => {
  return (
    <WidthContainer className={s.widthContainer}>
      <h1 className={s.title}>
        JS Coercion Cheat Sheet
        <img
          src="/SpikyDecor2.png"
          aria-hidden
          className={classNames(s.spikyDecor, s.left)}
        />
        <img
          src="/SpikyDecor2.png"
          aria-hidden
          className={classNames(s.spikyDecor, s.right)}
        />
      </h1>
      <section>
        <div className={s.background}>
          <h2 className={s.subtitle}>
            <span className={s.decoratedFragment}>
              What triggers type coercion
              <img
                src="/SquareYellow.png"
                aria-hidden
                className={s.squareDecor}
              />
            </span>
          </h2>
          <div className={s.tableOverflow}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th scope="col">Operators</th>
                  <th scope="col">Converts into</th>
                  <th scope="col">Exceptions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Logical context (e.g., <Code>{`if (val) { ... }`}</Code>)
                  </td>
                  <td>boolean</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Unary logical operator <Code>!</Code>
                  </td>
                  <td>boolean</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Binary logical operators <Code>||</Code>, <Code>&&</Code>
                  </td>
                  <td>boolean</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Unary operators <Code>+</Code>, <Code>-</Code>
                  </td>
                  <td>numeric</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Arithmetic operators <Code>-</Code>, <Code>+</Code>,{" "}
                    <Code>*</Code>, <Code>/</Code>, <Code>%</Code>
                  </td>
                  <td>numeric</td>
                  <td>
                    <Code>+</Code> converts to string, if one of operands is a
                    string
                  </td>
                </tr>
                <tr>
                  <td>
                    Comparison operators <Code>&gt;</Code>, <Code>&lt;</Code>,{" "}
                    <Code>&ge;</Code>, <Code>&le;</Code>
                  </td>
                  <td>numeric</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Bitwise operators <Code>|</Code>, <Code>&</Code>,{" "}
                    <Code>^</Code>, <Code>~</Code>
                  </td>
                  <td>numeric</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Equality <Code>==</Code> and inequality <Code>!=</Code>{" "}
                    operators
                  </td>
                  <td>numeric</td>
                  <td>
                    Numeric coercion is not triggered if:
                    <ul>
                      <li>both operands are strings</li>
                      <li>
                        one of the operands is <Code>null</Code> or{" "}
                        <Code>undefined</Code>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <div className={s.background}>
          <h2 className={s.subtitle}>
            <span className={s.decoratedFragment}>
              Primitives coercion
              <img
                src="/SquareOrange.png"
                aria-hidden
                className={s.squareDecor}
              />
            </span>
          </h2>
          <div className={s.tableOverflow}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th scope="col">Primitive</th>
                  <th scope="col">To boolean</th>
                  <th scope="col">To number</th>
                  <th scope="col">To string</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>null</Code>
                  </td>
                  <td>
                    <Code>false</Code>
                  </td>
                  <td>
                    <Code>0</Code>
                  </td>
                  <td>
                    <Code>"null"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>undefined</Code>
                  </td>
                  <td>
                    <Code>false</Code>
                  </td>
                  <td>
                    <Code>NaN</Code>
                  </td>
                  <td>
                    <Code>"undefined"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>NaN</Code>
                  </td>
                  <td>
                    <Code>false</Code>
                  </td>
                  <td>
                    <Code>NaN</Code>
                  </td>
                  <td>
                    <Code>"NaN"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>1</Code>
                  </td>
                  <td>
                    <Code>"true"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>false</Code>
                  </td>
                  <td>
                    <Code>false</Code>
                  </td>
                  <td>
                    <Code>0</Code>
                  </td>
                  <td>
                    <Code>"false"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>0</Code>
                  </td>
                  <td>
                    <Code>false</Code>
                  </td>
                  <td>
                    <Code>0</Code>
                  </td>
                  <td>
                    <Code>"0"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>-0</Code>
                  </td>
                  <td>
                    <Code>false</Code>
                  </td>
                  <td>
                    <Code>-0</Code>
                  </td>
                  <td>
                    <Code>"-0"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>42</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>42</Code>
                  </td>
                  <td>
                    <Code>"42"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>-42.42</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>-42.42</Code>
                  </td>
                  <td>
                    <Code>"-42.42"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>""</Code>
                  </td>
                  <td>
                    <Code>false</Code>
                  </td>
                  <td>
                    <Code>0</Code>
                  </td>
                  <td>
                    <Code>""</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>" 42 "</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>42</Code>
                  </td>
                  <td>
                    <Code>" 42 "</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>" -42.42 "</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>-42.42</Code>
                  </td>
                  <td>
                    <Code>" -42.42 "</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>"\n"</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>0</Code>
                  </td>
                  <td>
                    <Code>"\n"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>"42s"</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>NaN</Code>
                  </td>
                  <td>
                    <Code>"42s"</Code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <div className={s.background}>
          <h2 className={s.subtitle}>
            <span className={s.decoratedFragment}>
              Object Conversion Algorithm
              <img src="/SquareRed.png" aria-hidden className={s.squareDecor} />
            </span>
          </h2>
          <ol className={s.list}>
            <li>If the value is already a primitive, return it.</li>
            <li>
              If it&apos;s not a primitive, decide which conversion type to do:
            </li>
            <ul>
              <li>
                For boolean, convert it to <Code>true</Code>.
              </li>
              <li>
                For numeric:
                <ol>
                  <li>
                    Call <Code>input.valueOf()</Code>. If it returns a
                    primitive, use it.
                  </li>
                  <li>
                    Call <Code>input.toString()</Code>. If it returns a
                    primitive, use it.
                  </li>
                  <li>
                    If neither returns a primitive, throw a{" "}
                    <Code>TypeError</Code>.
                  </li>
                </ol>
              </li>
              <li>
                For string:
                <ol>
                  <li>
                    Call <Code>input.toString()</Code>. If it returns a
                    primitive, use it.
                  </li>
                  <li>
                    Call <Code>input.valueOf()</Code>. If it returns a
                    primitive, use it.
                  </li>
                  <li>
                    If neither returns a primitive, throw a{" "}
                    <Code>TypeError</Code>.
                  </li>
                </ol>
              </li>
            </ul>
          </ol>
        </div>
        <div className={s.background}>
          <h2 className={s.subtitle}>
            <span className={s.decoratedFragment}>
              Object conversion examples
              <img
                src="/SquarePink.png"
                aria-hidden
                className={s.squareDecor}
              />
            </span>
          </h2>
          <div className={s.tableOverflow}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th scope="col">Object</th>
                  <th scope="col">To boolean</th>
                  <th scope="col">To number</th>
                  <th scope="col">To string</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>[]</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>0</Code>
                  </td>
                  <td>
                    <Code>""</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>[42]</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>42</Code>
                  </td>
                  <td>
                    <Code>"42"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>[1, 2, 3]</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>NaN</Code>
                  </td>
                  <td>
                    <Code>"1, 2, 3"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>{`{}`}</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>NaN</Code>
                  </td>
                  <td>
                    <Code>"[object Object]"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>{`{ val: 42 }`}</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>NaN</Code>
                  </td>
                  <td>
                    <Code>"[object Object]"</Code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>new Date('01.01.2001')</Code>
                  </td>
                  <td>
                    <Code>true</Code>
                  </td>
                  <td>
                    <Code>978303600000</Code>
                  </td>
                  <td>
                    <Code>
                      "Mon Jan 01 2001 00:00:00 GMT+0100 (Central European
                      Standard Time)"
                    </Code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className={s.section}>
        <div className={s.background}>
          <h2 className={s.subtitle}>
            <span className={s.decoratedFragment}>
              Operator Precedence
              <img
                src="/SquarePurple.png"
                aria-hidden
                className={s.squareDecor}
              />
            </span>
          </h2>
          <p className={s.sectionExplanation}>
            In order from highest to lowest precedence:
          </p>
          <ol className={s.list}>
            <li>
              Grouping <Code>(x)</Code>
            </li>
            <li>
              Postfix operators:
              <ul>
                <li>
                  Postfix increment <Code>x++</Code>
                </li>
                <li>
                  Postfix decrement <Code>x--</Code>
                </li>
              </ul>
            </li>
            <li>
              Prefix operators:
              <ul>
                <li>
                  Prefix increment <Code>++x</Code>
                </li>
                <li>
                  Prefix decrement <Code>--x</Code>
                </li>
                <li>
                  Logical NOT <Code>!x</Code>
                </li>
                <li>
                  Bitwise NOT <Code>~x</Code>
                </li>
                <li>
                  Unary plus <Code>+x</Code>
                </li>
                <li>
                  Unary negation <Code>-x</Code>
                </li>
              </ul>
            </li>
            <li>
              Exponentiation <Code>x ** y</Code>
            </li>
            <li>
              Multiplicative operators:
              <ul>
                <li>
                  Multiplication <Code>x * y</Code>
                </li>
                <li>
                  Division <Code>x / y</Code>
                </li>
                <li>
                  Remainder <Code>x % y</Code>
                </li>
              </ul>
            </li>
            <li>
              Additive operators:
              <ul>
                <li>
                  Addition <Code>x + y</Code>
                </li>
                <li>
                  Subtraction <Code>x - y</Code>
                </li>
              </ul>
            </li>
            <li>
              Relational operators:
              <ul>
                <li>
                  Less than <Code>{`x < y`}</Code>
                </li>
                <li>
                  Less than or equal <Code>{`x <= y`}</Code>
                </li>
                <li>
                  Greater than <Code>{`x > y`}</Code>
                </li>
                <li>
                  Greater than or equal <Code>{`x >= y`}</Code>
                </li>
              </ul>
            </li>
            <li>
              Equality operators:
              <ul>
                <li>
                  Equality <Code>{`x == y`}</Code>
                </li>
                <li>
                  Inequality <Code>{`x != y`}</Code>
                </li>
                <li>
                  Strict equality <Code>{`x === y`}</Code>
                </li>
                <li>
                  Strict inequality <Code>{`x !== y`}</Code>
                </li>
              </ul>
            </li>
            <li>
              Bitwise AND <Code>x & y</Code>
            </li>
            <li>
              Bitwise XOR <Code>x ^ y</Code>
            </li>
            <li>
              Bitwise OR <Code>x | y</Code>
            </li>
            <li>
              Logical AND <Code>x && y</Code>
            </li>
            <li>
              Logical OR <Code>x || y</Code>
            </li>
          </ol>
        </div>
        <div className={s.background}>
          <h2 className={s.subtitle}>
            <span className={s.decoratedFragment}>
              Operator Precedence Examples
              <img
                src="/SquareBlue.png"
                aria-hidden
                className={s.squareDecor}
              />
            </span>
          </h2>
          <ul className={classNames(s.list, s.examplesList)}>
            <li>
              <Code>"5" + 1 + 2</Code> &rarr; <Code>"512"</Code>
              <ol>
                <li>
                  <Code>"5" + 1</Code> &rarr; <Code>"51"</Code>
                </li>
                <li>
                  <Code>"51" + 2</Code> &rarr; <Code>"512"</Code>
                </li>
              </ol>
            </li>
            <li>
              <Code>"5" * 1 * 2</Code> &rarr; <Code>10</Code>
              <ol>
                <li>
                  <Code>"5" * 1</Code> &rarr; <Code>5 * 1</Code> &rarr;{" "}
                  <Code>5</Code>
                </li>
                <li>
                  <Code>5 * 2</Code> &rarr; <Code>10</Code>
                </li>
              </ol>
            </li>
            <li>
              <Code>"5" + 1 * 2</Code> &rarr; <Code>"52"</Code>
              <ol>
                <li>
                  <Code>1 * 2</Code> &rarr; <Code>2</Code>
                </li>
                <li>
                  <Code>"5" + 2</Code> &rarr; <Code>"52"</Code>
                </li>
              </ol>
            </li>
            <li>
              <Code>("5" + 1) * 2</Code> &rarr; <Code>102</Code>
              <ol>
                <li>
                  <Code>"5" + 1</Code> &rarr; <Code>"51"</Code>
                </li>
                <li>
                  <Code>"51" * 2</Code> &rarr; <Code>102</Code>
                </li>
              </ol>
            </li>
            <li>
              <Code>(+"5" + 1) * 2</Code> &rarr; <Code>12</Code>
              <ol>
                <li>
                  <Code>+"5"</Code> &rarr; <Code>5</Code>
                </li>
                <li>
                  <Code>5 + 1</Code> &rarr; <Code>6</Code>
                </li>
                <li>
                  <Code>6 * 2</Code> &rarr; <Code>12</Code>
                </li>
              </ol>
            </li>
            <li>
              <Code>(!"5" + 1) * 2</Code> &rarr; <Code>2</Code>
              <ol>
                <li>
                  <Code>!"5"</Code> &rarr; <Code>!true</Code> &rarr;{" "}
                  <Code>false</Code>
                </li>
                <li>
                  <Code>false + 1</Code> &rarr; <Code>0 + 1</Code> &rarr;{" "}
                  <Code>1</Code>
                </li>
                <li>
                  <Code>1 * 2</Code> &rarr; <Code>2</Code>
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </section>
      <section className={s.section}>
        <div className={s.background}>
          <h2 className={s.subtitle}>
            <span className={s.decoratedFragment}>
              JavaScript Equality Table
              <img
                src="/SquareGreen.png"
                aria-hidden
                className={s.squareDecor}
              />
            </span>
          </h2>
          <img
            src="/JavaScriptEqualityTable.png"
            alt="JavaScript Equality Table"
          />
        </div>
      </section>
      <section className={s.section}>
        <div>
          <h2 className={s.subtitle}>Resources</h2>
          <ul className={s.list}>
            <li>
              <Link to="https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839">
                JavaScript type coercion explained
              </Link>{" "}
              by Alexey Samoshkin
            </li>
            <li>
              <Link to="https://javascript.info/type-conversions">
                Type Conversions
              </Link>{" "}
              and{" "}
              <Link to="https://javascript.info/object-toprimitive">
                Object to primitive conversion
              </Link>{" "}
              lessons
            </li>
            <li>
              <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence">
                Operator Precesence
              </Link>{" "}
              explained on MSDN
            </li>
            <li>
              <Link to="https://dorey.github.io/JavaScript-Equality-Table/">
                JavaScript Comparison Table
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </WidthContainer>
  );
};
