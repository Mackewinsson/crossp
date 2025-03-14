import Image from "next/image";

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconImg: "/img/address/phone.png",
      name: "Phone",
      info: (
        <>
          <li>
            <a href="https://api.whatsapp.com/send/?phone=34654990421&text&type=phone_number&app_absent=0">
              +34654990421
            </a>
          </li>
        </>
      ),
      animDelay: "0",
    },
    {
      id: 2,
      iconImg: "/img/address/email.png",
      name: "Email",
      info: (
        <>
          <li>
            <a href="mailto:info@mackewinsson.com">info@mackewinsson.com</a>
          </li>
        </>
      ),
      animDelay: "100",
    },
    {
      id: 3,
      iconImg: "/img/address/location.png",
      name: "Address",
      info: (
        <>
          <li>
            <p>Santiago, Chile</p>
          </li>
        </>
      ),
      animDelay: "200",
    },
  ];

  return (
    <ul className="wrapper">
      {addressContent.map((item) => (
        <li
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={item.animDelay}
          key={item.id}
        >
          <div className="list_inner">
            <div className="icon">
              <Image width={25} height={25} src={item.iconImg} alt="icon" />
            </div>
            {/* End icon */}
            <div className="content">
              <h3>{item.name}</h3>
              <ul>{item.info}</ul>
            </div>
            {/* End .content */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
