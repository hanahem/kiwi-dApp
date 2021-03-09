import React, {FC, useState} from 'react';

type Props = {
  selected: number;
}

const MobileNav: FC<Props> = ({selected}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="w-full flex justify-center my-4">
      <div className="flex items-center">

        <div className="relative cursor-pointer">
          <button
            onClick={() => setDropDownOpen(!dropDownOpen)}
            className="block rounded p-2 hover:bg-green-100 focus:outline-none focus:bg-green-100">
            <p className={`text-green-500`}>{'Services'}</p>
          </button>

          {dropDownOpen && (
            <div
                 className="absolute left-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20">
              <a href="#" className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">small <span
                className="text-gray-600">(640x426)</span></a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">medium <span
                className="text-gray-600">(1920x1280)</span></a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">large <span
                className="text-gray-600">(2400x1600)</span></a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;