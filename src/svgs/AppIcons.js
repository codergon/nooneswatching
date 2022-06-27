import React from "react";

const AppIcon = ({ type }) => {
  return type === "activitiesClicked" ? (
    <svg
      height="22"
      width="22"
      fill="none"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 10C3.61667 10 2.43767 9.51233 1.463 8.537C0.487667 7.56233 0 6.38333 0 5C0 3.6 0.487667 2.41667 1.463 1.45C2.43767 0.483333 3.61667 0 5 0C6.4 0 7.58333 0.483333 8.55 1.45C9.51667 2.41667 10 3.6 10 5C10 6.38333 9.51667 7.56233 8.55 8.537C7.58333 9.51233 6.4 10 5 10ZM15 22C14.45 22 13.9793 21.8043 13.588 21.413C13.196 21.021 13 20.55 13 20V15C13 14.45 13.196 13.979 13.588 13.587C13.9793 13.1957 14.45 13 15 13H20C20.55 13 21.021 13.1957 21.413 13.587C21.8043 13.979 22 14.45 22 15V20C22 20.55 21.8043 21.021 21.413 21.413C21.021 21.8043 20.55 22 20 22H15ZM16.725 6.7L6.7 16.7C6.78333 16.9 6.854 17.1083 6.912 17.325C6.97067 17.5417 7 17.7667 7 18C7 18.8333 6.71267 19.5417 6.138 20.125C5.56267 20.7083 4.85 21 4 21C3.16667 21 2.45833 20.7083 1.875 20.125C1.29167 19.5417 1 18.8333 1 18C1 17.15 1.29167 16.4377 1.875 15.863C2.45833 15.2877 3.16667 15 4 15C4.23333 15 4.45833 15.029 4.675 15.087C4.89167 15.1457 5.1 15.2167 5.3 15.3L15.3 5.275C15.2167 5.075 15.1457 4.87067 15.087 4.662C15.029 4.454 15 4.23333 15 4C15 3.15 15.2917 2.43733 15.875 1.862C16.4583 1.28733 17.1667 1 18 1C18.85 1 19.5627 1.28733 20.138 1.862C20.7127 2.43733 21 3.15 21 4C21 4.83333 20.7127 5.54167 20.138 6.125C19.5627 6.70833 18.85 7 18 7C17.7667 7 17.546 6.97067 17.338 6.912C17.1293 6.854 16.925 6.78333 16.725 6.7V6.7Z" />
    </svg>
  ) : type === "activities" ? (
    <svg
      height="22"
      width="22"
      fill="none"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 10C3.61667 10 2.43767 9.51233 1.463 8.537C0.487667 7.56233 0 6.38333 0 5C0 3.6 0.487667 2.41667 1.463 1.45C2.43767 0.483333 3.61667 0 5 0C6.4 0 7.58333 0.483333 8.55 1.45C9.51667 2.41667 10 3.6 10 5C10 6.38333 9.51667 7.56233 8.55 8.537C7.58333 9.51233 6.4 10 5 10ZM5 8C5.85 8 6.56233 7.70833 7.137 7.125C7.71233 6.54167 8 5.83333 8 5C8 4.15 7.71233 3.43733 7.137 2.862C6.56233 2.28733 5.85 2 5 2C4.16667 2 3.45833 2.28733 2.875 2.862C2.29167 3.43733 2 4.15 2 5C2 5.83333 2.29167 6.54167 2.875 7.125C3.45833 7.70833 4.16667 8 5 8ZM15 22C14.45 22 13.9793 21.8043 13.588 21.413C13.196 21.021 13 20.55 13 20V15C13 14.45 13.196 13.979 13.588 13.587C13.9793 13.1957 14.45 13 15 13H20C20.55 13 21.021 13.1957 21.413 13.587C21.8043 13.979 22 14.45 22 15V20C22 20.55 21.8043 21.021 21.413 21.413C21.021 21.8043 20.55 22 20 22H15ZM15 20H20V15H15V20ZM16.725 6.7L6.7 16.7C6.78333 16.9 6.854 17.1083 6.912 17.325C6.97067 17.5417 7 17.7667 7 18C7 18.8333 6.71267 19.5417 6.138 20.125C5.56267 20.7083 4.85 21 4 21C3.16667 21 2.45833 20.7083 1.875 20.125C1.29167 19.5417 1 18.8333 1 18C1 17.15 1.29167 16.4377 1.875 15.863C2.45833 15.2877 3.16667 15 4 15C4.23333 15 4.45833 15.029 4.675 15.087C4.89167 15.1457 5.1 15.2167 5.3 15.3L15.3 5.275C15.2167 5.075 15.1457 4.87067 15.087 4.662C15.029 4.454 15 4.23333 15 4C15 3.15 15.2917 2.43733 15.875 1.862C16.4583 1.28733 17.1667 1 18 1C18.85 1 19.5627 1.28733 20.138 1.862C20.7127 2.43733 21 3.15 21 4C21 4.83333 20.7127 5.54167 20.138 6.125C19.5627 6.70833 18.85 7 18 7C17.7667 7 17.546 6.97067 17.338 6.912C17.1293 6.854 16.925 6.78333 16.725 6.7Z" />
    </svg>
  ) : type === "mobiledes" ? (
    <svg
      height="269"
      width="268"
      fill="none"
      viewBox="0 0 268 269"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M130.424 3.67955C130.927 -0.555945 137.073 -0.555945 137.576 3.67955L141.792 39.2116C147.236 85.093 183.41 121.267 229.291 126.711L264.823 130.927C269.059 131.43 269.059 137.576 264.823 138.079L229.291 142.295C183.41 147.739 147.236 183.913 141.792 229.794L137.576 265.326C137.073 269.562 130.927 269.562 130.424 265.326L126.208 229.794C120.764 183.913 84.59 147.739 38.7086 142.295L3.17662 138.079C-1.05888 137.576 -1.05888 131.43 3.17662 130.927L38.7086 126.711C84.59 121.267 120.764 85.093 126.208 39.2116L130.424 3.67955Z" />
    </svg>
  ) : type === "vr" ? (
    <svg
      height="11"
      width="15"
      fill="none"
      viewBox="0 0 15 11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.467 1.572L12.861 2.557C13.339 2.663 13.814 2.784 14.286 2.919C14.709 3.039 15 3.426 15 3.865V7.21C15 8.21517 14.6007 9.17917 13.8899 9.88993C13.1792 10.6007 12.2152 11 11.21 11H10.668C10.5274 10.9999 10.3894 10.962 10.2685 10.8902C10.1477 10.8184 10.0483 10.7154 9.981 10.592C8.91 8.629 6.091 8.629 5.019 10.592C4.95167 10.7154 4.85234 10.8184 4.73146 10.8902C4.61058 10.962 4.47259 10.9999 4.332 11H3.79C2.78483 11 1.82083 10.6007 1.11007 9.88993C0.399302 9.17917 0 8.21517 0 7.21V3.865C0 3.425 0.291 3.04 0.714 2.919C1.186 2.784 1.661 2.663 2.139 2.557L2.533 1.572C2.71848 1.10803 3.03873 0.710286 3.45244 0.430083C3.86615 0.14988 4.35433 7.64211e-05 4.854 0H10.146C10.6457 7.64211e-05 11.1339 0.14988 11.5476 0.430083C11.9613 0.710286 12.2815 1.10803 12.467 1.572V1.572ZM3.461 1.942C3.5725 1.66378 3.76479 1.42534 4.01308 1.25744C4.26137 1.08954 4.55427 0.99987 4.854 1H10.146C10.4458 0.99995 10.7388 1.08977 10.9871 1.25785C11.2354 1.42594 11.4277 1.66459 11.539 1.943L11.692 2.327C8.91775 1.84929 6.08225 1.84929 3.308 2.327L3.461 1.943V1.942Z"
        fillRule="evenodd"
      />
    </svg>
  ) : type === "layout1" ? (
    <svg
      height="18"
      width="18"
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13H7V17H1V13ZM11 9H17V17H11V9ZM11 1H17V5H11V1Z"
        strokeLinecap="round"
        strokeWidth="1.2"
      />
      <path
        d="M1 1H7V9H1V1Z"
        strokeLinecap="round"
        className="fill_svg"
        strokeWidth="1.2"
      />
    </svg>
  ) : type === "call" ? (
    <svg
      height="10"
      width="26"
      fill="none"
      viewBox="0 0 26 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5964 8.91001C5.48029 8.02612 6.47024 7.31902 7.52383 6.78869C7.68775 6.70396 7.82563 6.57635 7.92275 6.41945C8.01988 6.26255 8.07263 6.08224 8.07537 5.89773L8.07537 2.78646C11.1036 1.80003 14.3668 1.80003 17.395 2.78646L17.4021 5.9048C17.3973 6.08731 17.4447 6.26741 17.5386 6.42396C17.6325 6.58051 17.7691 6.70704 17.9324 6.78869C19.0152 7.33499 20.0035 8.05117 20.8599 8.91001C21.2488 9.29892 21.8852 9.29892 22.2741 8.91001L24.7489 6.43513C25.1379 6.04623 25.1379 5.40983 24.7489 5.02092C18.1092 -1.61881 7.34705 -1.61881 0.707318 5.02092C0.318409 5.40983 0.318409 6.04623 0.707318 6.43513L3.18219 8.91001C3.5711 9.29892 4.2075 9.29892 4.5964 8.91001Z" />
    </svg>
  ) : type === "snake" ? (
    <svg
      height="512"
      width="512"
      fill="none"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.8159 119.114V135.313C50.8159 135.313 37.1089 134.482 37.1089 119.114H50.8159V119.114ZM57.1419 119.114C57.1419 134.482 70.8489 135.313 70.8489 135.313V119.114H57.1419V119.114Z"
        fill="#D5D5D5"
      />
      <path
        d="M78.3888 142.269C71.7518 135.633 51.6738 136.508 32.7318 155.449C31.2531 156.932 29.7156 158.355 28.1228 159.714C27.5901 159.862 27.0948 160.122 26.6698 160.475C26.1668 160.894 25.8508 160.898 25.5728 160.865C23.6668 160.644 20.8668 158.097 17.2518 153.296C16.9852 152.936 16.7115 152.582 16.4308 152.233C16.0995 151.833 15.6926 151.503 15.2336 151.26C14.7745 151.018 14.2721 150.868 13.7552 150.82C13.2382 150.771 12.7168 150.825 12.2207 150.978C11.7246 151.131 11.2635 151.381 10.8638 151.712C10.464 152.043 10.1335 152.45 9.89094 152.909C9.64842 153.368 9.49869 153.871 9.45031 154.388C9.40193 154.905 9.45585 155.426 9.60898 155.922C9.76211 156.418 10.0115 156.879 10.3428 157.279C10.4838 157.449 10.6818 157.717 10.9348 158.052C13.1858 161.041 15.7428 164.097 18.6358 166.182C12.5898 169.176 9.32078 168.41 9.26678 168.397C9.35978 168.421 9.40678 168.441 9.40678 168.441L6.82178 175.915C7.19078 176.042 8.43978 176.413 10.4878 176.413C15.4618 176.413 25.1408 174.224 38.3228 161.042C54.7208 144.642 70.3158 145.381 72.7968 147.862C73.164 148.229 73.6 148.521 74.0798 148.719C74.5596 148.918 75.0738 149.02 75.5931 149.02C76.1124 149.02 76.6267 148.918 77.1064 148.719C77.5862 148.52 78.0221 148.229 78.3893 147.862C78.7565 147.494 79.0477 147.058 79.2464 146.579C79.4451 146.099 79.5473 145.585 79.5473 145.065C79.5472 144.546 79.4449 144.032 79.2461 143.552C79.0473 143.072 78.756 142.636 78.3888 142.269V142.269Z"
        fill="#888"
        strokeWidth="15"
        stroke="#888"
      />
      <path
        d="M492.435 364.927C491.185 355.656 489.336 347.644 487.304 340.862C485.292 334.076 483.249 328.483 481.425 324.038C479.593 319.596 478.081 316.267 477.025 314.043L475.395 310.691C473.504 306.798 469.102 304.596 464.719 305.647C459.657 306.861 456.538 311.949 457.752 317.011L457.819 317.289L458.616 320.609C459.137 322.794 459.881 326.039 460.683 330.27C461.48 334.499 462.375 339.706 462.968 345.803C463.272 348.85 463.492 352.114 463.666 355.567C463.795 359.023 463.823 362.673 463.668 366.485C463.334 374.1 462.354 382.378 460.12 390.807C457.864 399.207 454.314 407.771 449.129 415.402C446.534 419.206 443.56 422.782 440.198 425.866C436.846 428.949 433.132 431.567 429.291 433.43C425.462 435.312 421.485 436.364 417.961 436.543C417.518 436.58 417.087 436.568 416.659 436.574C416.443 436.587 416.237 436.555 416.027 436.553C415.846 436.539 415.535 436.553 415.511 436.515C415.431 436.49 415.349 436.472 415.266 436.462L414.1 436.384L413.438 436.34C413.183 436.332 414.304 436.339 413.771 436.321L413.632 436.292L413.079 436.187C412.342 436.016 411.615 435.805 410.9 435.557C410.171 435.283 409.456 434.974 408.757 434.631C405.92 433.224 403.094 430.941 400.626 427.795C398.162 424.66 396.048 420.72 394.67 416.21C393.28 411.709 392.561 406.683 392.597 401.382C392.632 398.726 392.851 396.004 393.264 393.236C393.718 390.395 394.325 387.58 395.083 384.804C396.629 379.106 399.048 373.337 402.072 367.571C402.839 366.114 403.639 364.674 404.472 363.253C404.897 362.558 405.345 361.772 405.745 361.147L406.983 359.205L408.58 356.778L410.602 353.611C411.927 351.473 413.255 349.323 414.515 347.106C419.583 338.268 424.169 328.817 427.934 318.686C431.706 308.564 434.626 297.744 436.246 286.33C437.847 274.919 438.172 262.902 436.55 250.633C434.92 238.388 431.359 225.887 425.203 213.981C419.061 202.113 410.285 190.757 398.272 181.793C392.28 177.328 385.477 173.493 377.977 170.724C370.492 167.951 362.295 166.279 353.936 166.072C345.583 165.846 337.12 167.114 329.3 169.659C321.47 172.194 314.285 175.937 308.061 180.338C301.819 184.739 296.446 189.745 291.851 194.974C287.23 200.207 283.377 205.667 280.017 211.175C273.357 222.213 268.744 233.424 265.218 244.49C261.704 255.569 259.308 266.541 257.57 277.38C255.829 288.223 254.809 298.926 254.211 309.515C253.935 314.803 253.727 320.075 253.67 325.302C253.62 327.872 253.63 330.741 253.627 333.3L253.659 336.914L253.669 340.314C253.639 348.215 252.932 355.817 251.557 362.879C250.159 369.922 248.071 376.414 245.345 381.973C242.624 387.535 239.311 392.161 235.698 395.642C232.084 399.116 228.192 401.45 224.462 402.687C220.729 403.934 217.195 404.075 214.302 403.473C211.382 402.863 209.144 401.61 207.231 399.757C205.324 397.903 203.58 395.26 202.336 391.374C201.085 387.528 200.428 382.539 200.607 376.951C200.758 371.368 201.734 365.219 203.322 358.958C204.145 355.76 205.095 352.595 206.169 349.472C206.714 347.882 207.296 346.291 207.897 344.701L208.829 342.316L209.707 340.18L212.09 334.647L214.687 328.487C216.364 324.427 217.984 320.343 219.546 316.237C222.589 308.238 225.421 300.16 228.04 292.012C233.186 275.985 237.378 260.213 240.589 244.711C243.772 229.205 246.006 213.982 247.105 199.039C248.195 184.098 248.172 169.429 246.574 155.058C244.966 140.712 241.758 126.575 236.134 113.277C233.326 106.643 229.908 100.248 225.894 94.3371C221.889 88.4251 217.288 83.0191 212.365 78.3511C207.454 73.6631 202.206 69.7651 197.058 66.5921C192.292 63.6731 187.281 61.1749 182.082 59.1261C173.026 55.5681 165.269 53.9391 159.052 52.9591C150.357 49.6331 140.732 47.7021 130.574 47.5481C91.2439 46.9541 30.2719 72.7551 25.3759 105.287C25.3279 105.61 25.2919 105.935 25.2679 106.26C24.5269 115.956 32.6089 124.078 42.3329 124.006L82.8879 123.706C86.4739 123.679 88.0679 128.195 85.2619 130.427C73.7449 139.588 55.8999 154.755 63.9949 154.755C82.2659 154.755 116.54 154.625 128.966 154.674C145.631 154.74 160.982 152.231 173.192 146.839C174.591 151.422 175.735 156.853 176.437 163.009C177.488 172.061 177.635 182.572 176.834 193.992C176.04 205.418 174.307 217.764 171.702 230.675C169.119 243.591 165.683 257.096 161.381 270.875C159.197 277.877 156.828 284.821 154.279 291.698C152.979 295.205 151.63 298.693 150.232 302.162L148.083 307.385L145.617 313.285L144.164 316.939L142.859 320.404C141.998 322.756 141.175 325.122 140.39 327.5C138.772 332.412 137.352 337.386 136.132 342.411C133.673 352.701 131.924 363.704 131.737 375.576C131.56 387.406 132.925 400.205 137.36 413.261C139.581 419.767 142.572 426.305 146.514 432.55C150.441 438.79 155.296 444.732 161.005 449.936C166.77 455.195 173.256 459.603 180.267 463.028C187.293 466.466 194.804 468.853 202.413 470.165C217.66 472.815 233.195 471.08 247.017 466.046C260.887 461.031 273.043 452.787 282.787 442.964C292.544 433.115 299.962 421.767 305.31 410.106C310.673 398.422 314.053 386.44 316.117 374.645C318.142 362.842 318.872 351.192 318.674 339.838L318.527 332.401C318.512 330.141 318.478 328.188 318.498 325.936C318.497 321.516 318.631 317.138 318.81 312.78C319.21 304.081 319.95 295.502 321.193 287.239C322.424 278.977 324.121 270.997 326.374 263.635C328.613 256.279 331.438 249.537 334.683 244.039C337.911 238.551 341.583 234.417 344.74 232.163C346.317 231.001 347.735 230.312 348.982 229.871C350.237 229.44 351.336 229.262 352.497 229.259C353.654 229.262 354.899 229.456 356.308 229.944C357.711 230.43 359.262 231.224 360.847 232.368C364.028 234.639 367.251 238.342 369.723 242.985C372.22 247.624 373.998 253.169 374.868 259.148C375.336 262.13 375.537 265.244 375.579 268.408C375.581 271.647 375.387 274.882 374.999 278.097C374.173 284.649 372.573 291.329 370.318 297.957C368.054 304.584 365.106 311.144 361.658 317.529C360.797 319.133 359.912 320.723 359.004 322.3L355.815 327.754L353.788 331.387C353.111 332.623 352.553 333.735 351.936 334.914C350.743 337.258 349.606 339.631 348.526 342.029C344.204 351.644 340.926 361.844 338.904 372.379C336.835 382.994 336.277 393.847 337.246 404.618C337.745 410.037 338.658 415.41 339.978 420.69C341.349 425.971 343.11 431.153 345.36 436.149C349.821 446.132 356.055 455.437 364.101 463.141C372.106 470.839 381.945 476.967 392.82 480.328C398.234 481.996 403.842 482.956 409.503 483.184L411.603 483.224L413.122 483.236L413.784 483.201L415.261 483.124L417.65 482.972C418.503 482.918 419.064 482.831 419.756 482.754C420.417 482.669 421.085 482.604 421.733 482.491C423.037 482.285 424.334 482.07 425.598 481.791C435.778 479.662 444.556 475.414 451.969 470.386C459.409 465.343 465.506 459.412 470.527 453.201C475.305 447.295 479.37 440.845 482.637 433.986C488.902 420.976 491.791 408.106 492.992 396.448C494.058 385.956 493.871 375.375 492.435 364.927V364.927Z"
        fill="#888"
      />
      <path
        d="M118.602 70.0801C125.025 70.0801 130.232 75.2871 130.232 81.7101V96.0061C130.232 102.429 125.025 107.636 118.602 107.636C112.179 107.636 106.972 102.429 106.972 96.0061V81.7101C106.972 75.2871 112.179 70.0801 118.602 70.0801Z"
        fill="#2C3C47"
      />
      <path
        d="M43.9622 109.481C45.8548 109.481 47.3892 107.947 47.3892 106.054C47.3892 104.161 45.8548 102.627 43.9622 102.627C42.0695 102.627 40.5352 104.161 40.5352 106.054C40.5352 107.947 42.0695 109.481 43.9622 109.481Z"
        fill="#f00"
      />
    </svg>
  ) : type === "fist" ? (
    <svg
      height="150"
      width="156"
      fill="none"
      viewBox="0 0 156 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M78 54C78 58.7739 76.1036 63.3523 72.7279 66.7279C69.3523 70.1036 64.7739 72 60 72C55.2261 72 50.6477 70.1036 47.2721 66.7279C43.8964 63.3523 42 58.7739 42 54V24C42 19.2261 43.8964 14.6477 47.2721 11.2721C50.6477 7.89642 55.2261 6 60 6C64.7739 6 69.3523 7.89642 72.7279 11.2721C76.1036 14.6477 78 19.2261 78 24V54Z"
        stroke="#ddd"
        strokeLinecap="round"
        strokeWidth="12"
      />
      <path
        d="M78 24C78 19.2261 79.8964 14.6477 83.2721 11.2721C86.6477 7.89642 91.2261 6 96 6C100.774 6 105.352 7.89642 108.728 11.2721C112.104 14.6477 114 19.2261 114 24V42"
        stroke="#ddd"
        strokeLinecap="round"
        strokeWidth="12"
      />
      <path
        d="M108 78H96C93.6334 78.0099 91.2883 77.5511 89.1 76.65C86.9116 75.749 84.9234 74.4235 83.2499 72.75C81.5765 71.0766 80.251 69.0884 79.35 66.9C78.4489 64.7117 77.9901 62.3666 78 60V48C78 46.4087 78.6321 44.8826 79.7573 43.7574C80.8826 42.6321 82.4087 42 84 42H132C134.367 41.9901 136.712 42.4489 138.9 43.35C141.088 44.251 143.077 45.5765 144.75 47.25C146.423 48.9234 147.749 50.9116 148.65 53.1C149.551 55.2883 150.01 57.6334 150 60V72C150 91.0956 142.414 109.409 128.912 122.912C115.409 136.414 97.0956 144 78 144C58.9044 144 40.5909 136.414 27.0883 122.912C13.5857 109.409 6 91.0956 6 72V42C6 37.2261 7.89642 32.6477 11.2721 29.2721C14.6477 25.8964 19.2261 24 24 24C28.7739 24 33.3523 25.8964 36.7279 29.2721C40.1036 32.6477 42 37.2261 42 42V54C42 58.7739 40.1036 63.3523 36.7279 66.7279C33.3523 70.1036 28.7739 72 24 72C19.2261 72 14.6477 70.1036 11.2721 66.7279C7.89642 63.3523 6 58.7739 6 54"
        stroke="#ddd"
        strokeLinecap="round"
        strokeWidth="12"
      />
    </svg>
  ) : null;
};

export default AppIcon;
