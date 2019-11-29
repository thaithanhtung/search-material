import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;
    return (
      <div className={styles.boxTable}>
        <input placeholder="Mã vật tư" className={styles.inputForm} />
        <input placeholder="Tên vật tư" className={styles.inputForm} />
        <select
          placeholder="Tất cả"
          style={{ height: 42 }}
          className={styles.inputForm}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <input placeholder="Giá tối thiểu" className={styles.inputForm} />
        <input placeholder="Giá tối đa" className={styles.inputForm} />
        <button className={styles.btnSearch}>Tìm kiếm</button>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </table>
      </div>
    );
  }
}
