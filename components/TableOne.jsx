import React from "react";

const TableOne = () => {
  return (
    <div>
      {" "}
      <div className="table-one mt-5">
        <table className="border-collapse border table-fixed text-left font-light">
          <tbody>
            <tr className="firstRow">
              <td className="border p-5 font-medium" colSpan="3">
                <p>
                  <strong>Temel Çerezler</strong>
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="border p-10 font-medium">
                <p>
                  <strong>Amaç</strong>
                </p>
              </td>
              <td className="border p-10 font-medium">
                <p>
                  <strong>
                    Birinci Taraf Çerezler/Üçüncü Taraf Çerezler/Her İkisi
                  </strong>
                </p>
              </td>
              <td className="border p-10 font-medium">
                <p>
                  <strong>Süre ve diğer bilgiler</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td className="border p-5">
                <p>
                  Uygun risk kontrol ve güvenlik stratejilerini belirlemek ve
                  uygulamak için çerezler kullanıyoruz.
                </p>
                <p className="mt-3">
                  Üçüncü taraf çerezler, ödeme risk kontrolü ve dolandırıcılığın
                  önlenmesi amacıyla kullanılır.
                </p>
              </td>
              <td className="border p-5">
                <p>Her İkisi</p>
              </td>
              <td className="border p-5">
                <p>Bu birinci taraf çerezler 365 güne kadar saklanır.</p>
                <p className="mt-3">
                  Bu üçüncü taraf çerezlerin süresi, üçüncü taraf çerez
                  politikalarına tabi olacaktır.
                </p>
              </td>
            </tr>
            <tr>
              <td className="border p-5">
                <p>
                  Ülkeniz/bölgeniz ve dilinizle ilgili ürünlerin
                  görüntülenmesini sağlamak ve hizmetlerimizin nerede ve hangi
                  dilde kullanıldığını anlamak için çerezler kullanıyoruz.
                  Böylece hizmetlerimizi etkin bir şekilde sunabiliyoruz.
                </p>
              </td>
              <td className="border p-5">
                <p>Birinci taraf çerezler</p>
              </td>
              <td className="border p-5">
                <p>Bu çerezler 365 güne kadar saklanır.</p>
              </td>
            </tr>
            <tr>
              <td className="border p-5">
                <p>
                  Çerezleri, reklam çerezleriyle ilgili tercihleriniz gibi
                  gizlilik ayarlarınızı hatırlamak için kullanırız.
                </p>
              </td>
              <td className="border p-5">
                <p>Birinci taraf çerezler</p>
              </td>
              <td className="border p-5">
                <p>
                  Gizlilik ayarlarınızı hatırlamak için kullanılan çerezler 365
                  gün boyunca saklanır.
                </p>
              </td>
            </tr>
            <tr>
              <td className="border p-5">
                <p>
                  Çerezleri, oturum açma işlemleri, sayfa performansı ve satın
                  alma işlevi gibi çeşitli işlevleri desteklemek için
                  kullanıyoruz.
                </p>
                <p className="mt-3">
                  Üçüncü taraf çerezler, üçüncü taraf operatörler aracılığıyla
                  oturum açmanızı ve üçüncü taraf ödeme sağlayıcıları
                  aracılığıyla ödeme yapmanızı sağlamak için kullanılır.
                </p>
              </td>
              <td className="border p-5">
                <p>Her İkisi</p>
              </td>
              <td className="border p-5">
                <p>
                  Bu birinci taraf çerezlerin bazıları oturum çerezleridir,
                  diğerleri ise kalıcıdır ve 1 gün, 30 gün, 100 gün, 180 gün
                  veya 365 güne kadar süreyle saklanır.
                </p>
                <p className="mt-3">
                  Üçüncü taraf çerezlerin süresi, üçüncü taraf çerez
                  politikalarına tabi olacaktır.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOne;
