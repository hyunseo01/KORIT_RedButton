type MenuSelectProps = {};

const MenuSelect = () => {
  const foodArr = ["음료", "스낵/푸드", "세트메뉴"];

  return (
    <div>
      <select
        className="w-[400px] h-[40px] border border-[#D2D2D2] px-2.5 py-2 bg-white appearance-none bg-[url('https://redbutton.co.kr/wp-content/uploads/2021/03/select-arrow.png')] bg-no-repeat bg-[right_0.7rem_top_50%] bg-[16px_auto]"
        name=""
        id=""
      >
        {foodArr.map((v, index) => (
          <option key={index} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MenuSelect;
