import React from "react";

function AddressForm({ delhiveryDetail, setDelhiveryDetail }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDelhiveryDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const renderInput = (label, name, type = "text", placeholder, maxLength, pattern) => (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        value={delhiveryDetail[name]}
        name={name}
        onChange={(e) => handleChange(e)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        maxLength={maxLength}
        pattern={pattern}
        required
      />
    </div>
  );

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 pr-3">
        {renderInput("Name", "Name", "text", "Enter Your Name")}
        {renderInput("Address", "Address", "text", "Delhivery Address")}
        {renderInput("Phone number", "Phone", "tel", "Mobile Number", 10, "[0-9]{3}-[0-9]{2}-[0-9]{3}")}
        {renderInput("Alternet Phone number", "AlternetNumber", "tel", "Mobile Number", 10, "[0-9]{3}-[0-9]{2}-[0-9]{3}")}
        {renderInput("City", "City", "text", "Enter your nearest city")}
        {renderInput("State", "State", "text", "Enter your state")}
        {renderInput("Pincode", "Pincode", "number", "Enter your zipcode", 6)}
      </div>
    </div>
  );
}

export default AddressForm;
