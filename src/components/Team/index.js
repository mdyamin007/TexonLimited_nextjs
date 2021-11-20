import React from "react";
import CardMember from "../CardMember";

const Team = () => {
  return (
    <section className="relative -mt-32">
      <div className="absolute bg-wave-overlay w-full h-full z-0 top-0 left-0 mt-10"></div>
      <div className="relative z-10 container mx-auto px-10">
        <div className="flex flex-wrap -m-4">
          <CardMember
            profile_pic={
              "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/01/uptech-testimonta-one-8712312.png"
            }
            profile_name={"Roberto Soldado"}
            designation={"Programmer"}
            about={
              "Pellent esque at posuere  lus. Ut sed dui justo. Hasellus scelerisque turpis arcu, ut pulvinar lectus."
            }
          />
          <CardMember
            profile_pic={
              "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/01/uptech-testimonial-one-imgg.png"
            }
            profile_name={"Sia Vussalin"}
            designation={"Designer"}
            about={
              "Konnit  esque at posuere  lus. Ut sed dui justo. Hasellus scelerisque turpis arcu, ut pulvinar lectus."
            }
          />
          <CardMember
            profile_pic={
              "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/01/uptech-testimonta-one-3212312.png"
            }
            profile_name={"Mehedi Hasan"}
            designation={"UI Designer"}
            about={
              "Aqlin pobuy at posuere  lus. Ut sed dui justo. Hasellus scelerisque turpis arcu, ut gulbahar leman."
            }
          />
          <CardMember
            profile_pic={
              "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/01/member25-agency-600x600.jpg"
            }
            profile_name={"Alina Robertson"}
            designation={"Marketing"}
            about={
              "Loppim esque at posuere  lus. Ut sed dui justo. Hasellus scelerisque turpis arcu, ut pulvinar lectus."
            }
          />
          <CardMember
            profile_pic={
              "https://jahangirseven.com/uptech/wp-content/uploads/sites/19/2020/01/member2-agency-600x600.jpg"
            }
            profile_name={"Elcan kazimli"}
            designation={"SMM Manager"}
            about={
              "Nekrat of esque at posuere  lus. Ut sed dui justo. Hasellus scelerisque turpis arcu, ut reddent relins."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
