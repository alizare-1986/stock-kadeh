import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function CustomDate({ product, setProduct }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProduct({ ...product, constructionDate: date });
  };
  return (
    <div className=" mb-14 flex flex-col items-center mt-8">
      <p className="mb-2">تاریخ ثبت آگهی</p>
      <div className=" p-2 border rounded-lg shadow-lg shadow-blue-800">
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          value={product.constructionDate}
          onChange={changeHandler}
          calendarPosition="bottom-right"
        />
      </div>
    </div>
  );
}

export default CustomDate;
