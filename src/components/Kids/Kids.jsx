import React from "react";
import kids from "../../assets/kids.png";
import { KidsCon, KidsLeft, KidsRight } from "./KidsStyle";

function Kids() {
  return (
    <KidsCon>
      <KidsLeft>
        <img src={kids} alt="" />
      </KidsLeft>

      <KidsRight>
        <div>
          <h3>Create profiles for kids</h3>
          <p>
            Send kids on adventures with their favorite <br />
            characters in a space made just for them <br />
            free with your membership
          </p>
        </div>
      </KidsRight>
    </KidsCon>
  );
}

export default Kids;
