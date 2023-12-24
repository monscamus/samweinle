import * as React from "react"
import { SVGProps } from "react"
const BeeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={500}
    height={500}
    viewBox="0 0 132.292 132.292"
    {...props}
  >
    <path
      d="M106.746 198.738c-3.125-.343-6.502-1.413-8.272-2.62-.861-.588-1.809-1.548-2.283-2.314-.708-1.141-1.74-4.059-2.091-5.905-.193-1.016-.2-2.961-.013-4.052.21-1.23.695-2.668 1.247-3.7l.486-.911-.37.066c-1.65.294-2.318.163-3.046-.599-.861-.9-1.184-2.394-.85-3.928.19-.872.864-2.215 1.507-3.004.593-.727 1.774-1.61 2.623-1.959.751-.31 1.83-.388 2.393-.174.493.188.566.164.566-.181 0-.358.357-1.113.841-1.779l.449-.617-.038-.787c-.031-.643-.133-1.034-.557-2.145-.285-.746-.61-1.811-.722-2.365-.188-.93-.195-1.1-.083-2.192.136-1.336.158-1.261-.728-2.55-.225-.328-.795-1.267-1.266-2.086-1.864-3.243-3.413-4.87-5.413-5.684-1.022-.416-1.526-.965-1.852-2.018-.296-.957-.292-1.625.016-2.445.216-.577.32-.71.77-.983.442-.27.645-.316 1.372-.316.47 0 .977.057 1.128.127.555.258 1.278.954 2.374 2.287 1.485 1.807 1.971 2.137 3.829 2.6.766.192 1.585.459 1.82.594.235.134.449.218.476.185.094-.115-.454-1.102-1.068-1.923-1.147-1.536-1.82-2.77-2.814-5.162-.766-1.84-1.227-3.57-1.603-6.005-.135-.872-.464-2.82-.73-4.328-.506-2.855-.85-5.346-1.147-8.287-.249-2.46-.25-8.4-.003-10.432.292-2.401.734-4.18 1.51-6.08.81-1.98 2.02-3.667 4.736-6.602 3.135-3.387 4.51-5.225 5.966-7.982 1.063-2.011 2.117-4.736 2.35-6.072.067-.385.452-.866.694-.866.308 0 .619.563.862 1.558.302 1.242 1.205 3.511 2.022 5.086 1.52 2.927 2.885 4.782 5.999 8.143 2.892 3.122 3.978 4.629 4.843 6.722 1.26 3.052 1.762 6.208 1.761 11.1 0 1.312-.05 3.056-.11 3.875-.186 2.515-.684 6.491-1.143 9.121-.24 1.378-.542 3.148-.672 3.935-.64 3.883-1.005 5.295-1.929 7.452-.824 1.924-1.652 3.442-2.482 4.546-.64.85-1.364 2.092-1.28 2.194.026.032.25-.05.497-.184.247-.133 1.056-.392 1.798-.575 1.966-.486 2.63-.972 4.346-3.188.36-.466.932-1.057 1.269-1.314.586-.445.654-.467 1.56-.507.842-.036 1.007-.008 1.473.253.596.333.879.789 1.042 1.677.184 1.005-.304 2.578-1.002 3.228-.175.163-.712.465-1.194.672-1.796.77-3.525 2.585-5.103 5.359-.467.82-1.07 1.813-1.34 2.206-.97 1.411-.955 1.369-.82 2.389.201 1.527-.031 2.985-.76 4.765-.458 1.115-.643 1.919-.592 2.57.04.49.12.675.548 1.247.353.472.547.86.653 1.305l.151.634.451-.166c.97-.356 2.136-.1 3.483.763 1.116.716 1.794 1.473 2.41 2.693.636 1.259.811 1.996.755 3.179-.034.716-.1 1.037-.304 1.46-.359.748-.986 1.37-1.601 1.589-.498.177-.747.173-2.061-.026l-.424-.064.386.694c1.559 2.807 1.933 5.949 1.09 9.16-.392 1.496-1.373 4.015-1.87 4.8-.85 1.348-2.144 2.338-4.144 3.172-2.86 1.192-4.95 1.624-8.136 1.68-1.208.022-2.394.018-2.636-.008zm-9.964-6.549c-.26-.9-.37-3.015-.19-3.7.066-.257.34-1.106.609-1.888.484-1.41.661-2.44.53-3.08-.033-.158-.197-.499-.364-.755-.536-.82-.713-1.355-.698-2.107.007-.377-.024-.685-.069-.685-.262 0-1.35 2.46-1.613 3.646-.25 1.128-.305 3.052-.116 4.068.268 1.439.648 2.798 1.009 3.613.38.86 1.027 1.889 1.076 1.712.017-.063-.062-.433-.174-.824zm25.052-.474c.453-.888 1-2.762 1.215-4.158.188-1.227.08-3.135-.243-4.315-.359-1.313-1.261-3.268-1.508-3.268-.044 0-.075.345-.068.767.013.748 0 .79-.524 1.699l-.536.932.008.894c.007.809.056 1.031.522 2.325.283.787.569 1.753.635 2.146.152.9.047 2.486-.232 3.497-.11.4-.2.766-.2.812 0 .207.542-.568.931-1.331zm-12.576-1.51c.304-1.285.75-2.366 1.433-3.475 1.087-1.765 1.969-2.417 4.282-3.169 2.54-.826 3.293-1.578 3.746-3.735.276-1.316.054-2.507-.821-4.416-.81-1.766-.84-1.86-.834-2.669.003-.416-.013-.756-.035-.756-.023 0-.149.282-.28.626-.287.754-.313 1.764-.092 3.663.226 1.938.034 2.957-.74 3.93-.488.616-.803.809-2.065 1.265-1.245.45-1.95.936-2.771 1.909-.533.63-.704.958-1.36 2.604-.413 1.036-.786 1.838-.829 1.782-.043-.055-.195-.443-.338-.863-.417-1.222-1.1-2.686-1.531-3.285-.738-1.023-1.814-1.788-3.108-2.208-1.024-.332-1.407-.566-1.889-1.154-.811-.991-1.01-1.995-.792-4.01.219-2.025.193-2.954-.103-3.666-.135-.326-.256-.593-.268-.593-.013 0-.023.342-.023.76 0 .651-.052.874-.367 1.58-1.314 2.944-1.556 3.878-1.346 5.21.144.91.516 1.939.864 2.386.48.615 1.388 1.126 2.902 1.632 1.634.547 2.287.874 3.005 1.503 1.195 1.05 2.317 3.237 2.854 5.568.088.382.186.662.218.623.032-.04.162-.508.288-1.043zm-14.415-11.853c.291-.104.918-.434 1.393-.733 1.677-1.054 2.775-2.861 2.874-4.73.083-1.59-.384-2.29-1.614-2.416-1.662-.17-3.497 1.035-4.52 2.965-.85 1.61-.918 3.512-.16 4.483.49.625 1.117.758 2.027.431zm29.832-.056c.588-.348.835-.89.891-1.953.08-1.505-.404-2.867-1.469-4.145-.589-.707-1.864-1.492-2.71-1.668-1.84-.382-2.738.477-2.607 2.492.14 2.162 1.758 4.244 4.073 5.242.791.341 1.284.35 1.822.032zm-14.24-3.937c1.278-.412 2.724-1.483 3.48-2.576 1.18-1.71 1.949-3.935 2.2-6.373.228-2.23-.435-5.173-1.665-7.389-1.507-2.713-4.468-4.246-6.776-3.51-.803.257-2.227 1.136-2.908 1.796-1.116 1.08-2.196 3.305-2.68 5.522-.624 2.862-.157 6.153 1.246 8.78.665 1.244 1.085 1.771 1.989 2.498.925.745 1.885 1.234 2.84 1.449.776.173 1.256.132 2.274-.197zm-2.054-3.331c-1.461-.446-2.663-2.168-3.16-4.527-.212-1.008-.21-2.895.003-3.99.516-2.643 1.938-4.435 3.621-4.565.962-.075 1.623.247 2.449 1.19 2.222 2.539 2.284 7.91.122 10.612-.867 1.085-2.047 1.582-3.035 1.28zm-6.377-23.157a6.177 6.177 0 0 1-.138-1.017c-.001-.443.221-1.164.458-1.484.149-.2.134-.24-.24-.631-.505-.528-.591-.95-.324-1.59.219-.524.527-.846 1.423-1.486.75-.536 1.07-.96 1.743-2.3.86-1.712 1.41-2.208 3.036-2.737.881-.286.946-.291 1.54-.123 1.95.553 2.628 1.143 3.57 3.112.587 1.224.756 1.432 1.775 2.186.727.538.986.804 1.208 1.241.351.695.3 1.043-.244 1.656l-.39.44.242.458c.387.73.421 1.638.102 2.732-.242.83 2.688-3.49 3.826-5.641.827-1.564 1.395-3.518 1.794-6.172.118-.787.45-2.88.736-4.65 1.336-8.26 1.64-14.312.966-19.256-.339-2.491-1.293-5.294-2.362-6.936-.689-1.059-2.237-2.91-3.924-4.692-3.859-4.077-6.052-7.714-6.979-11.575-.53-2.21-.698-2.729-.88-2.729-.126 0-.212.167-.31.596a8.946 8.946 0 0 1-.227.835c-.05.13-.196.694-.327 1.252-.321 1.376-.844 2.795-1.582 4.292-1.186 2.406-2.575 4.287-5.46 7.391-2.112 2.27-3.65 4.171-4.252 5.255-2.72 4.892-3.037 13.264-.975 25.746.265 1.606.553 3.426.639 4.043.209 1.494.666 3.635.974 4.562.45 1.353 1.596 3.446 3.152 5.758.544.809 1.488 2.09 1.54 2.09.014 0-.035-.281-.11-.626zm-1.59-13.294c-.124-1.295-.266-2.65-.317-3.01-.126-.901-.44-4.56-.582-6.796-.146-2.278-.062-7.238.154-9.18.309-2.77.933-5.277 1.91-7.666.782-1.916 1.512-3.172 3.026-5.212 2.66-3.58 3.476-5.152 4.046-7.78.202-.933.382-1.033.537-.297.411 1.951.703 2.74 1.644 4.448.323.586 1.194 1.889 1.936 2.894 1.985 2.69 2.755 3.978 3.543 5.922 1.028 2.534 1.627 4.981 1.957 7.988.169 1.537.235 7.215.106 9.144-.15 2.238-.365 4.741-.544 6.296a218.172 218.172 0 0 0-.503 4.859c-.13 1.548-.227.64-.254-2.385-.015-1.721.01-4.846.055-6.945.183-8.416-.059-12.139-1.023-15.738-.753-2.809-1.778-5.002-3.392-7.256-1.267-1.77-2.024-2.915-2.48-3.754l-.412-.756-.06 5.525c-.04 3.768-.108 6.094-.215 7.314-.115 1.318-.457 6.475-.457 6.893 0 .023-.062.042-.138.042-.106 0-.154-.272-.203-1.142-.035-.629-.156-2.404-.27-3.945-.16-2.194-.217-4.105-.26-8.813l-.056-6.01-.352.647c-.416.765-1.595 2.56-2.758 4.2-1.972 2.778-3.198 5.879-3.816 9.648-.496 3.029-.606 5.927-.475 12.55.092 4.674.062 10.67-.054 10.67-.038 0-.17-1.06-.293-2.355zm-26.91 62.33c-2.31-.451-4.889-1.415-6.638-2.48-.6-.367-2.385-1.684-3.758-2.775-2.282-1.812-3.171-2.054-6.443-1.754-.32.03-.34.01-.323-.305.012-.197.24-.691.551-1.192.62-.998.85-1.527 1.182-2.725.133-.48.392-1.305.576-1.832.183-.528.532-1.654.774-2.504 1.157-4.05 1.961-5.898 3.734-8.58 2.843-4.3 8.29-8.788 14.007-11.54 4.327-2.082 9.81-3.865 14.204-4.617.806-.138 1.904-.329 2.44-.423 1.346-.237 1.437-.23 1.399.094-.044.37-.733.659-2.1.878-5.664.907-13.099 3.49-17.75 6.167-4.879 2.81-9.105 6.607-11.566 10.395-1.591 2.45-2.245 4.02-3.574 8.585-.499 1.713-1.365 4.102-1.804 4.978-.156.311-.26.566-.23.566.321 0 2.546-2.472 3.219-3.577.14-.23.666-1.41 1.17-2.623 1.582-3.806 2.678-5.53 4.683-7.36 3.693-3.371 10.497-6.82 17.084-8.66 1.767-.494 6.402-1.386 8.054-1.55.77-.077.702-.055-1.513.475-2.054.491-5.609 1.585-8.103 2.493-8.041 2.928-14.216 6.598-16.815 9.997-.973 1.273-1.518 2.328-3.424 6.632-.203.458-.65 1.152-1.096 1.699-.414.508-.744.924-.733.924.011 0 .566-.3 1.233-.667 5.165-2.843 16.104-7.177 24.336-9.643 1.443-.432 3.018-.971 3.5-1.2.483-.227.917-.413.965-.413.158 0 .093.625-.083.795-.657.636-1.902 1.16-5.296 2.23-2.647.836-10.026 3.53-13.814 5.045-2.04.816-6.543 2.74-6.77 2.892-.071.049.368.122.977.163 1.18.079 2.635.408 4.768 1.08 4.157 1.31 6.526 1.203 11.374-.51 2.096-.74 2.313-.836 3.58-1.579.955-.56 1.35-.663 1.35-.352 0 .063-1.044.767-2.319 1.565-3.556 2.224-5.527 2.931-8.53 3.061-2.1.091-3.255-.105-6.48-1.1-4.178-1.29-5.414-1.3-9.225-.082a8.68 8.68 0 0 0-2.002.925c-.483.311-.746.528-.585.482.16-.046.82-.113 1.464-.148 2.002-.108 2.632.17 5.697 2.518 2.914 2.233 4.536 3.098 7.169 3.825 2.039.562 3.115.692 5.087.615 1.978-.077 3.364-.355 5.112-1.023.684-.261 2.056-.775 3.05-1.142 3.849-1.422 5.098-1.97 6.59-2.886.805-.495 1.604-1.028 1.774-1.185.361-.331.503-.356.583-.104.282.9-2.876 3.064-6.458 4.427-1.658.631-4.535 1.751-5.482 2.135-1.771.716-3.421 1.031-5.647 1.077-1.573.033-2.18-.004-3.124-.188zm66.19.157c-1.301-.193-2.975-.64-4.246-1.133a1823.7 1823.7 0 0 0-3.222-1.247c-3.986-1.538-5.082-2.05-6.586-3.073-1.502-1.021-2.35-2.064-1.863-2.292.078-.036.286.066.464.229.982.9 4.059 2.516 6.293 3.306.582.206 2.266.828 3.742 1.384 3.598 1.353 4.428 1.53 7.176 1.527 2.298-.002 2.819-.08 5.027-.752 1.212-.369 2.958-1.162 4.083-1.854.387-.237 1.588-1.11 2.67-1.94 2.152-1.65 2.907-2.094 3.925-2.31.66-.14 2.423-.095 3.039.077.16.045-.103-.172-.586-.483a8.718 8.718 0 0 0-2.001-.925c-2.36-.756-2.707-.824-4.296-.84-1.731-.017-2.272.087-5.125.988-1.02.322-2.404.695-3.075.828-2.72.54-5.803.16-8.591-1.057-.967-.423-5.467-3.188-5.467-3.36 0-.31.392-.208 1.354.35 1.269.736 1.5.839 3.43 1.527 3.144 1.121 5.43 1.565 7.359 1.43 1.377-.098 2.412-.32 4.55-.974 2.199-.672 3.21-.897 4.485-.993l1.031-.079-1.269-.575c-4.73-2.146-14.792-5.947-20.892-7.893-2.826-.902-4.051-1.586-4.051-2.263 0-.163.04-.297.088-.297.048 0 .476.183.952.407.475.223 2.05.763 3.5 1.198 8.1 2.435 19.018 6.738 24.064 9.485 1.693.921 1.634.928.799-.091-.52-.634-.889-1.223-1.177-1.878-1.956-4.436-2.388-5.238-3.668-6.802-1.9-2.322-5.148-4.577-9.924-6.892-4.13-2.002-10.155-4.163-14.634-5.249-.94-.227-1.818-.44-1.952-.474-.716-.175 1.368.12 3.75.53 4.435.765 8.138 1.9 12.077 3.7 5.232 2.391 8.906 4.852 11.103 7.435 1.284 1.51 2.193 3.157 3.433 6.224l.907 2.244 1.278 1.553c.703.855 1.471 1.68 1.707 1.836l.43.281-.266-.524c-.602-1.187-1.43-3.552-2.251-6.425-1.3-4.547-3.1-7.755-6.152-10.96-2.162-2.271-5.614-4.975-8.337-6.531-4.88-2.788-12.238-5.356-18.06-6.302-1.588-.258-2.307-.634-1.979-1.035.078-.095.408-.08 1.21.06l2.614.452c3.432.594 7.333 1.743 11.08 3.263 4.799 1.946 8.005 3.867 11.77 7.053 4.742 4.012 7.148 7.796 8.978 14.119.332 1.148.735 2.462.896 2.921.16.46.397 1.226.526 1.704.315 1.163.621 1.877 1.14 2.655.516.777.657 1.084.657 1.429 0 .234-.036.252-.366.182-.201-.043-.852-.108-1.447-.145-1.848-.114-3.072.318-4.801 1.697-1.41 1.125-3.29 2.516-3.937 2.915-1.78 1.098-4.47 2.094-6.777 2.508-1.169.21-3.638.292-4.589.15zM93.25 163.918a.312.312 0 0 1 .244 0c.067.033.012.06-.122.06-.135 0-.19-.027-.122-.06zm31.142 0a.312.312 0 0 1 .244 0c.067.033.012.06-.122.06s-.19-.027-.122-.06zm-30.355-.122c.07-.034.154-.03.187.01.032.039-.025.067-.128.062-.114-.006-.137-.034-.06-.072zm29.677 0c.071-.034.155-.03.188.01.032.039-.026.067-.129.062-.113-.006-.136-.034-.059-.072zm-29-.116a.312.312 0 0 1 .244 0c.067.033.012.06-.122.06s-.19-.027-.122-.06zm28.317-.002c.07-.035.155-.03.187.009.033.04-.025.067-.128.062-.114-.006-.137-.034-.059-.072z"
      style={{
        fill: props.color ? props.color : "#111",
        strokeWidth: 0.107887,
      }}
      transform="translate(-42.053 -76.678)"
    />
  </svg>
)
export default BeeLogo
