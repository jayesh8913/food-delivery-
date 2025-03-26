import { menu_list } from "../assets/assets";

export default function Category({ category, setCategory }){
    return(
        <>
        <div className="flex justify-evenly items-center">
          {menu_list.map((li) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === li.menu_name ? "All" : li.menu_name
                  )
                }
                key={li.id}
                className="m-4 flex flex-col items-center justify-between"
              >
                <img
                  className={`mb-4 w-32 cursor-pointer rounded-full ${category===li.menu_name? "p-0.5 border-4 border-[#ff6b35]":""}`}
                  src={li.menu_image}
                  alt={li.menu_name}
                />
                <p className="text-neutral-800 mb-2">{li.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr className="text-gray-300" />
        </>
    )
}