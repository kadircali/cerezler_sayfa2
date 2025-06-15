import React from "react";

const TableTwo = () => {
  return (
    <div>
      {" "}
      <div className="table-two mt-5">
        <table className="border-collapse border table-fixed text-left font-light">
          <tbody>
            <tr className="firstRow">
              <td colSpan="2" className="p-5">
                <p>
                  <strong>Birinci Taraf Reklam Çerezleri</strong>
                </p>
              </td>
            </tr>
            <tr className="border">
              <td className="p-5 border">
                <p>
                  <strong>Amaç</strong>
                </p>
              </td>
              <td className="p-5">
                <p>
                  <strong>Süre ve diğer bilgiler</strong>
                </p>
              </td>
            </tr>
            <tr className="border">
              <td className="p-5">
                <p>
                  Bu birinci taraf çerezler, size ülkenize/bölgenize ve dilinize
                  uygun ve alakalı reklamlar sunmamızı veya size gösterilen
                  reklamları izlememizi sağlar.
                </p>
              </td>
              <td className="p-5 border">
                <p>
                  Bu çerezler 365 güne kadar saklanır ve
                  <a
                    className="text-orange-600 underline"
                    href="#"
                    target="_blank"
                  >
                    buradaki
                  </a>
                  Birinci Taraf Reklamcılık seçeneği kullanılarak
                  etkinleştirilebilir veya devre dışı bırakılabilir.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTwo;
