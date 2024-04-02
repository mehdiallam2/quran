import useHideHeader from "hooks/useHideHeader";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

function Header() {
  const { isHidden } = useHideHeader();

  return (
    <header className={styles.header + " " + (isHidden && styles.hide)}>
      <nav className={styles.container}>
        <Link className={styles.logo} to="/" title="Go Home">
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 299.75 293.73"
          >
            <path
              fill="currentColor"
              transform="translate(-26.135 119.5)"
              d="m86.973 75.092c7.2646-4.7782 14.358-8.055 31.711-14.65 10.91-5.6512 26.552-3.8012 34.641-14.092 0.80275-1.2375-3.5565-9.8544-7.9464-15.707-4.1938-5.5917-11.743-13.188-19.858-19.981-8.0937-6.7755-7.5392-6.4671-9.4959-5.2814-5.789 3.5076-12.474 9.0844-25.84 21.556-15.234 14.215-18.819 17.262-25.886 22.003-3.3922 2.2758-10.217 5.917-13.23 7.059-1.47 0.55709-1.9065 1.0239-3.0199 3.2295-5.572 11.038-8.3166 23.267-6.9874 31.135 0.94497 5.5933 4.8121 11.56 8.2367 12.708 0.78878 0.26453 2.8235 0.42958 4.5216 0.36679 13.825-4.6121 21.597-20.72 33.153-28.346zm34.65-29.685c-2.1473-1.9242-4.2189-3.6772-4.6036-3.8955-0.82204-0.46652-1.4784 0.14204-4.3453 4.0287-2.1618 2.9308-2.7835 3.1075-5.2365 1.4883-2.3816-1.5721-7.5954-6.7958-7.5954-7.61 0-0.74032 3.7805-7.5534 4.7361-8.5353 0.705-0.72439 2.1001 0.13771 7.186 4.4405 1.9141 1.6194 3.7482 2.8927 4.0757 2.8296 0.32756-0.06308 1.6974-1.7325 3.044-3.7098 1.9835-2.9124 2.6441-3.5951 3.4787-3.5951 0.76065 0 2.2504 1.2039 5.6932 4.6006 2.5646 2.5303 4.6629 4.8558 4.6629 5.1679 0 0.95672-3.3147 6.2086-4.6023 7.2921-0.66779 0.5619-1.5236 1.016-1.9018 1.0091s-2.4445-1.5869-4.5918-3.5111zm134.95 47.804c2.003-1.0492 4.3606-2.7381 5.9049-4.23 2.4794-2.3952 2.5707-2.5564 2.5707-4.5369 0-5.2773-2.9767-9.6956-7.0469-11.796-3.0863-1.5929-9.4663-1.5265-10.387 0.82632-1.2642 3.7103-0.61932 9.3621 1.7725 15.535 1.4572 3.7604 2.7006 5.9489 3.3801 5.9489 0.25904 0 1.9714-0.78596 3.8052-1.7466zm-118.89 34.36c18.62-5.9587 34.949-13.147 46.55-23.6 3.2738-3.0664 3.6098-3.5186 3.3986-4.5745-0.48087-2.4043-4.0036-10.733-9.091-21.493-8.265-17.481-8.1593-17.201-7.6069-20.137 0.81938-4.3539 2.2306-7.6027 3.3024-7.6027 0.60503 0 14.789 15.945 14.789 16.625 0 0.92523-2.1523 0.81178-4.1749-0.22006-1.096-0.55913-1.8159-0.71563-2.0795-0.45205-0.67457 0.67456 0.68277 4.4515 4.0317 11.218 5.3833 10.878 6.7395 16.792 5.3514 23.338-1.229 5.7955-3.7642 10.121-9.2628 15.803-15.932 13.423-26.461 20.841-46.544 28.502 0 0 1.4137 8.5663 3.7434 13.293 3.5609 7.2243 10.832 6.2978 17.438 3.1861 15.781-8.9353 17.83-18.227 30.297-31.541 8.8826-9.3959 16.499-16.03 35.097-23.739 11.461-4.7507 22.405-6.4839 22.403-7.3911-1e-3 -0.40999-0.44886-2.8722-0.99489-5.4715-2.0794-9.899-2.3765-17.932-0.87374-23.63 1.6286-6.1759 5.4268-11.335 9.1711-12.457 2.1804-0.65328 5.9754-0.61901 7.6216 0.06881 0.73368 0.30655 2.1701 1.4873 3.192 2.624 5.1836 5.7654 7.857 15.72 6.3609 23.685-1.378 7.3364-4.3051 12.89-9.8282 18.647l-3.2523 3.39 1.1336 1.6357c3.9382 5.6924 19.427 5.515 34.995-1.511 0.14139-0.56332-0.52346-8.8199-1.4774-18.348-1.7586-17.564-2.1021-20.458-7.5923-63.968-7.2449-57.415-8.584-68.018-10.521-83.31-1.123-8.8652-2.0418-17.653-2.0418-17.653l3.4604-7.8211c2.4898 8.3387 11.83 28.647 11.83 28.647s-1.5693-0.83219-2.5069-1.8493c-0.93755-1.0171-2.1422-1.8493-2.1422-1.8493s-0.35435 0.9895-0.18702 2.9795c0.13781 1.6387 0.52502 6.3082 0.86048 10.377 1.644 19.939 1.9866 22.939 13.984 122.47 1.9347 16.05 1.917 15.785 1.45 21.781-0.82421 10.583-3.0474 16.786-7.6774 21.421-4.4482 4.4532-11.634 7.1907-19.071 7.2658-4.8337 0.0488-7.9757-0.77051-11.036-2.8778-2.6172-1.8024-6.1185-6.0593-8.485-10.316-0.90411-1.6262-1.8786-2.9572-2.1657-2.9577-0.73777-1e-3 -13.601 2.899-19.96 5.7083-9.9165 4.3809-22.662 13.089-26.488 15.648-5.3528 3.5805-12.116 10.253-21.106 20.825-12.044 14.163-18.115 19.924-22.691 21.532-2.714 0.95388-6.4775 1.0147-9.6697 0.15626-3.2637-0.87767-6.052-2.5264-9.072-5.3646-4.5041-4.2328-6.9694-9.4056-8.4065-17.639-0.34738-1.9902-0.47493-4.4848-0.47493-4.4848s-3.4698 0.63696-6.7472 1.0882c-8.634 1.1889-19.361 1.1963-24.863 0.0171-10.452-2.2401-17.937-8.5313-21.956-18.454-2.1504-5.3094-3.2262-11.213-3.599-19.753-0.17679-4.0488-0.40398-5.8562-0.73613-5.8562-0.50578 0-1.432 0.68228-6.4932 4.7831-4.1855 3.3913-5.8682 3.9956-10.508 3.7738-5.1-0.24381-8.1588-1.7519-12.474-6.1502-10.201-10.397-10.24-23.44-0.14035-47.322 0.36265-0.85755 0.56352-1.7142 0.44639-1.9038s-1.6082-1.0072-3.3135-1.817c-7.6371-3.6268-12.895-9.5507-14.463-16.295-2.6256-14.454 2.8281-25.07 9.1737-37.881-0.71444 12.739-9.7383 29.274-2.4233 39.989 2.4784 3.6776 10.01 3.9174 15.073 2.7498 2.9821-0.68767 11.222-5.6891 18.148-11.015 17.817-14.535 22.551-18.422 38.547-33.212 1.5432-1.4236 2.7195-2.8134 2.614-3.0883-0.16227-0.42285-51.255-39.579-52.951-40.583l-2.2198-1.8228 0.0604-5.7534c0.0631-6.0123 0.73853-9.6659 2.6789-14.491l0.86956-2.1624 6.8339-3.8548c33.668-18.992 75.917-34.781 123.27-46.069 3.6737-0.87576 8.627-0.69608 10.76 0.39029 3.6506 1.8597 5.0961 4.2096 5.0783 8.2554-0.0386 8.7788-7.1281 20.621-22.134 36.973-3.5629 3.8824-8.1846 9.1342-11.227 12.758l-1.365 1.6257 0.21729-1.6438c0.11951-0.90411 1.0567-3.3082 2.0827-5.3425 2.9132-5.7763 4.4753-7.7156 19.649-24.396 4.9568-5.4487 6.8764-8.3493 6.8764-10.39 0-2.2014-0.85728-4.0714-2.5003-5.4539l-1.3792-1.1605-6.9986 0.2066c-19.92 1.679-29.006 7.5205-46.379 12.673-5.673 1.6677-36.991 12.791-50.003 18.367-11.637 4.9864-31.233 15.1-31.233 16.119 0 0.48934-0.30154 0.27625 41.301 29.187 5.6507 3.9267 13.397 9.3363 17.213 12.021 3.8167 2.685 7.1886 4.9774 7.493 5.0942s1.8974-0.34255 3.54-1.0208c7.5544-3.1195 14.422-4.5994 21.353-4.6014 2.4165-8.22e-4 4.4916-0.15997 4.6115-0.35388 0.28938-0.46822-1.2087-6.5619-4.207-17.113-6.0966-21.454-6.9016-31.244-3.2692-39.76 0.83365-1.9545 1.5306-2.4011 2.2446-1.4384 0.96847 1.3059 9.7054 19.638 9.471 19.872-0.14584 0.14584-1.0163-0.0354-1.9344-0.40272-2.9749-1.1903-3.0412-1.1242-2.7247 2.7225 0.39545 4.8063 2.1011 12.927 3.7766 17.979 3.693 11.137 8.7087 17.997 17.92 24.511 3.018 2.134 3.1811 2.3322 3.6527 4.4395 0.6825 3.0497 0.31944 10.328-0.55902 11.206-0.59346 0.59346-0.83377 0.4972-2.7374-1.0966-7.4506-6.238-17.421-9.4348-26.954-8.6423-4.1654 0.34623-9.6435 1.8221-9.6435 2.598 0 0.28314 2.1694 2.2633 4.821 4.4004 13.858 11.169 30.429 25.212 41.542 35.205 7.1539 6.4325 13.469 10.804 15.607 10.804 0.88682 0 0.93983-0.12699 0.72898-1.7466-0.12507-0.96062-0.42531-3.9658-0.66721-6.6781-0.70022-7.8511-2.3072-21.851-4.3163-37.603-1.0234-8.024-2.3194-18.195-2.8799-22.603-1.3839-10.883-2.8819-24.091-3.5084-30.935l-0.51817-5.6607c0.55924-0.92803 3.2319-5.7333 3.2319-5.7333l12.623 28.02s-1.4851-0.61691-2.9052-1.766-2.6982-1.973-2.8402-1.8311c-0.37459 0.37459 2.1313 21.861 5.6431 48.385 1.3996 10.571 3.6342 29.031 4.1456 34.247 0.56093 5.7214 0.84748 6.1697 4.1996 6.5694 4.1619 0.4963 11.291-2.1337 15.845-5.8455 0.97935-0.79817 1.9626-1.8507 2.1851-2.3389 0.50598-1.1105-1.1124-15.656-4.8272-43.385-1.4686-10.962-2.8398-21.226-3.0472-22.808-0.20739-1.5822-1.2074-9.0719-2.2223-16.644-1.0149-7.5719-2.1251-15.894-2.4671-18.493-2.3602-17.936-3.3408-24.815-4.7961-33.645-2.0417-12.387-2.1005-13.654-2.1005-13.654s2.8032-9.0031 3.1638-9.0031c1.1752 0 14.093 27.789 14.093 27.789l-6.9274-3.5423s0.0651 11.777 7.6404 67.309c5.0405 36.95 7.5912 56.858 7.5865 59.213-0.0141 7.001-2.4933 13.957-6.4022 17.962-3.5824 3.6706-9.3817 7.0655-15.371 8.9982-1.2432 0.40114-3.6455 0.2302-3.8686 0.4368-0.24893 0.23054 1.3154 18.184 1.2895 26.309-0.0369 11.575-1.4199 49.198-2.1862 53.51-0.92003 5.1765-3.5583 14.148-4.1292 14.148-0.18389 0-0.44774-4.0223-0.58634-8.9384-0.24465-8.6775 0.3419-64.529-1.0009-76.968-0.89042-8.2483-0.64822-7.6254-3.3835-8.702-7.1314-2.807-13.46-7.3797-23.909-17.274-18.391-17.416-23.905-22.223-32.664-28.479-1.7854-1.2751-3.4036-2.3184-3.5959-2.3184-0.80546 0-0.21127 1.0494 2.0558 3.6309 4.3192 4.9181 7.0308 8.8251 9.3168 13.424 2.8628 5.7592 3.8942 9.7553 3.8942 15.087 0 10.435-2.9704 14.763-14.384 20.955-4.6475 2.5217-9.1982 4.3377-19.225 7.6717-17.556 5.838-24.2 8.6323-31.073 13.07-5.7324 3.7011-11.919 9.4933-13.617 12.748-1.2201 2.3392-0.45864 11.543 1.4479 17.5 3.1855 9.9537 11.844 14.359 22.913 17.144 10.305 1.855 18.279-0.16911 29.855-3.5839 2.1077-6.1286 9.1719-18.061 11.543-23.651-1.0894 6.8016-5.4926 16.336-6.7477 21.63zm-2.6707-31.083c-2.2257-2.2361-3.5617-3.9045-3.5617-4.448 0-1.1058 2.9351-5.5252 4.6-6.9261 0.80911-0.68082 1.5081-0.96397 1.9301-0.78187 5.191 3.257 7.0058 6.0317 9.9082 8.9618 0 1.208-2.2617 4.0569-5.3881 8.2938-2.0556 0.0718-3.3181-0.90989-7.4886-5.0998zm-96.757-100.1-0.60921-1.7944c-1.0491-3.0899-1.5011-7.6651-1.0676-10.807 1.0696-7.7527 3.0813-11.002 10.996-21.678 1.8119-1.6173 6.8521-7.5112 6.0023-5.0199-0.0716 0.10666-2.966 4.6904-3.0371 4.7976-3.1545 4.7588-5.7833 10.045-6.5306 13.151-0.64634 2.6861-0.57875 6.3716 0.16263 8.8682 1.2575 4.2345 2.8394 4.4673 6.221 0.91562 1.2912-1.3562 2.6828-2.4658 3.0925-2.4658 0.90103 0 0.9072 0.12586 0.13391 2.7298-2.8492 6.2401-11.296 18.284-15.364 11.302zm81.079 170.72c-2.6856-1.1482-3.682-6.1056-2.4497-12.188 0.74504-3.6769 1.2256-4.8904 1.9365-4.8904 0.31715 0 0.36961 1.1389 0.1751 3.8014-0.30091 4.119 0.0769 6.0005 1.5265 7.6027 1.0808 1.1945 1.9642 1.1692 3.1472-0.0901 1.7199-1.8308 2.249-0.0882 0.86964 2.864-1.4575 3.1194-2.862 3.9019-5.2053 2.9zm117.59-14.061c-2.3499-5.8218-4.9898-8.4624-9.5647-9.5672-1.3005-0.31406-1.938-0.77073-2.6228-1.8787-1.2087-1.9557-1.4615-4.5126-0.64061-6.4774 0.61411-1.4698 0.73293-1.5459 1.9953-1.2789 3.1134 0.65858 6.5569 3.9827 9.6656 9.3308 1.5834 2.724 2.9265 4.4989 2.9987 3.9627 0.0113-0.0842 0.26949-2.7009 0.57369-5.8149 0.60798-6.2238 1.861-9.7984 3.7338-10.652 2.0541-0.93591 4.9174 0.53443 6.3066 3.2386 0.65726 1.2793 0.57739 1.926-0.38974 3.1555-0.94578 1.2024-1.5131 1.0791-3.8039-0.82649-1.3955-1.1609-2.3809-1.2251-3.2952-0.21481-0.54814 0.60569-0.68171 1.6624-0.68827 5.4452-0.0125 7.2112-1.3214 14.351-2.6308 14.351-0.28493 0-1.0219-1.2483-1.6378-2.774zm-59.979-130.24s3.5449-3.5255 6.25-5.4898c-2.2103-0.41609-5.4507-4.9358-5.1314-6.3209 0.3808-1.5172 3.3041-4.5163 5.3832-5.5228 2.4947-1.2077 3.4814-0.6742 3.4814 1.8823 0 1.2269-0.72942 2.1324-0.72942 2.1324s0.24109-0.90416-0.29452-1.3889c-1.7951-0.61385-5.407 1.459-4.756 3.2691 0.48841 1.2846 2.3816 2.3299 4.2197 2.3299 0.74653 0 2.6315-0.36439 4.1889-0.80976 1.5574-0.44537 3.4317-1.3481 3.4317-1.3481 0.18497 0.74029 0.34616 2.3152 0.32163 2.7562-4.311 4.0382-14.561 9.3618-14.561 9.3618zm136.44 61.614c-0.13478-0.64392-0.8041-9.084-1.4874-18.756-1.4601-20.668-2.0671-27.011-3.7249-38.922-0.67635-4.8596-1.782-12.812-2.457-17.671-0.67498-4.8596-1.5825-11.332-2.0168-14.384-0.43426-3.0514-1.4574-10.356-2.2737-16.233-2.6511-19.086-3.4286-21.863-3.4286-21.863l2.605-11.905c5.3368 8.908 14.891 28.946 14.891 28.946l-7.6988-4.4774s2.2875 21.058 4.5404 35.919c4.507 29.731 5.8015 42.87 5.801 58.877-3.5e-4 10.785-0.20269 12.209-2.542 17.881-1.5209 3.6881-1.8875 4.1178-2.2078 2.5876zm-47.92-43.538c-2.1473-1.9195-4.2142-3.6663-4.5931-3.8818-0.56509-0.32135-1.2133 0.27289-3.6052 3.3051-1.6039 2.0333-3.0683 3.6969-3.2542 3.6969-1.5531 0-10.328-7.7121-10.328-9.0771 0-0.93556 4.7125-8.5793 5.294-8.5868 0.88672-0.01151 3.1313 1.5094 6.7677 4.5859 1.8374 1.5545 3.6113 2.7742 3.942 2.7105 0.59197-0.114 1.8196-1.6052 4.4331-5.3846 0.79724-1.1529 1.6408-1.9192 2.1128-1.9192 1.0286 0 3.7239 2.2795 7.6345 6.4567l3.1592 3.3746-1.7407 2.9301c-2.0831 3.5064-3.8102 5.3282-5.0245 5.3002-0.52124-0.01204-2.5184-1.4736-4.7972-3.5106zm-7.1404-17.068c-0.14127-0.70634-0.25685-2.6135-0.25685-4.2381-5.0943-27.972-6.906-60.457-15.22-110.21-0.67-3.6411-1.2182-8.2786-1.2182-8.2786l3.9123-9.1355 12.644 29.582-5.7951-3.5768c4.4542 34.188 6.7182 52.011 8.9276 69.01 1.3501 9.3035 1.598 19.555 0.64798 26.802-0.61925 4.7239-2.3934 11.327-3.0435 11.327-0.18794 0-0.45729-0.57791-0.59855-1.2842zm62.514-2.9744c-2.1948-2.0341-2.5665-3.3285-2.5535-8.8921 0.0113-4.8177 0.49985-8.2494 1.9015-13.356 0.66165-2.4107 1.0779-0.82479 0.68342 2.6036-0.83838 7.2857-0.86404 8.9089-0.17816 11.268 0.37289 1.2827 1.1215 2.8472 1.6636 3.4767l0.98565 1.1446 1.0094-0.94695c0.88379-0.82916 1.0414-0.86332 1.2673-0.27461 0.54055 1.4086 0.24959 3.7927-0.59374 4.8648-1.0816 1.375-2.7737 1.4203-4.1855 0.11189zm-85.299-68.494c-2.702-1.6474-3.9396-6.9654-3.0096-12.933 0.534-3.4263 1.6076-7.1918 2.0505-7.1918 0.17422 0 0.1539 1.4332-0.0451 3.1849-0.62787 5.5255 0.0605 9.4204 2.0701 11.712 0.95128 1.0849 2.0469 0.87193 2.777-0.53991 0.77364-1.4961 1.5769-1.3935 1.7666 0.22554 0.22242 1.8984-0.30587 3.8045-1.4221 5.131-1.2241 1.4547-2.3015 1.5604-4.1874 0.41056zm-161.17 53.193c-2.5163-1.3357-3.4714-4.7902-2.8529-10.319 0.6281-5.614 3.0999-13.836 4.1595-13.836 0.53289 0 0.11476 4.1381-0.75876 7.5091-0.98932 3.8179-0.9127 7.176 0.21697 9.5096 1.102 2.2765 1.6365 2.5766 3.3354 1.8729 1.7274-0.71553 2.21-0.14773 1.6481 1.9391-0.77343 2.8723-3.5617 4.4845-5.7483 3.3238zm48.068-50.712c-1.3996-1.7793-2.2346-5.0146-2.217-8.5903 0.018-3.6606 1.0446-8.7468 2.0049-9.9337 0.56089-0.69321 0.58919-0.44841 0.29128 2.5199-0.60007 5.979-1.8431 7.8321 0.52329 10.348 0.73433 0.78059 2.3294 1.6793 3.1951 0.35802 0.95735-1.4611 1.9006-1.3628 1.9006 0.19807 0 1.693-0.88505 3.6604-2.2588 5.021-1.4217 1.4082-2.377 1.4303-3.4395 0.0795z"
            />
          </svg>
        </Link>
        <div className={styles.inputWrapper}>
          <svg
            className={styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            className={styles.input}
            placeholder="Search..."
            type="text"
            name="search"
            id="search"
          />
          <kbd className={styles.keybordShortcut}>
            <span className={styles.keybordShortcutSymbol}>⌘</span>K
          </kbd>
        </div>
      </nav>
    </header>
  );
}

export default Header;