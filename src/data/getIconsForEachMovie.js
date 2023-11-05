import movieData from "./movieData.json";
import dotenv from "dotenv";
dotenv.config();

const clientId = process.env.IconScout_clientID;

const getIcons = async (object) => {
  try {
    const response = await fetch(
      `https://api.iconscout.com/v3/search?query=${object}&product_type=item&asset=icon&price=free&per_page=10&page=1&formats%5B%5D=svg&sort=relevant&styles%5B%5D=line`,
      {
        method: "GET",
        headers: {
          "Client-ID": clientId,
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();
    const iconURL = data.response.items.data[0].urls.png_64;
    console.log(iconURL);
    return iconURL;
  } catch (err) {
    return err;
  }
};

movieData.forEach((obj) => {
  getIcons(obj.object);

  // Add the new attribute objectURL
  obj.objectURL = modifiedTitle;
});

console.log(movieData);

<svg
  xmlns="http://www.w3.org/2000/svg"
  enable-background="new 0 0 512 512"
  viewBox="0 0 512 512"
  id="hover-board"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="ring">
    <path
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M32 12a23.5 23.5 0 1 0 23.5 23.5A23.5 23.5 0 0 0 32 12zm0 42a18.5 18.5 0 1 1 18.5-18.5A18.5 18.5 0 0 1 32 54zM37.5 12h-11l-.35-2.43a4 4 0 0 1 4-4.57h3.78a4 4 0 0 1 4 4.57z"
    ></path>
  </svg>
  <path
    d="M441,106h-40c-38.599,0-70,31.401-70,70H181c0-38.599-31.401-70-70-70H71c-38.599,0-70,31.401-70,70v130
			c0,5.522,4.477,10,10,10h30v60c0,16.542,13.458,30,30,30h40c16.542,0,30-13.458,30-30v-60c14.51,0,54.566,0,80,0
			c2.652,0,5.195-1.054,7.071-2.929L256,285.143l27.929,27.929c1.876,1.875,4.419,2.929,7.071,2.929c25.479,0,65.514,0,80,0v60
			c0,16.542,13.458,30,30,30h40c16.542,0,30-13.458,30-30v-60h30c5.522,0,10-4.478,10-10V176C511,137.401,479.599,106,441,106z
			 M351,176c0-27.57,22.43-50,50-50h40c27.57,0,50,22.43,50,50v80H351V176z M71,126h40c27.57,0,50,22.43,50,50v80H21v-80
			C21,148.43,43.43,126,71,126z M121,376c0,5.514-4.486,10-10,10h-10v-30c0-5.522-4.478-10-10-10s-10,4.478-10,10v30H71
			c-5.514,0-10-4.486-10-10v-60h60V376z M216.857,296H181v-60h65v30.857L216.857,296z M266,266.857V236h65v60h-35.857L266,266.857z
			 M451,376c0,5.514-4.486,10-10,10h-10v-30c0-5.522-4.478-10-10-10s-10,4.478-10,10v30h-10c-5.514,0-10-4.486-10-10v-60h60V376z"
  ></path>
</svg>;

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="ring">
  <path
    fill="none"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M32 12a23.5 23.5 0 1 0 23.5 23.5A23.5 23.5 0 0 0 32 12zm0 42a18.5 18.5 0 1 1 18.5-18.5A18.5 18.5 0 0 1 32 54zM37.5 12h-11l-.35-2.43a4 4 0 0 1 4-4.57h3.78a4 4 0 0 1 4 4.57z"
  ></path>
</svg>;
