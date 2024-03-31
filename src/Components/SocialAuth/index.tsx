import React from 'react'

function SocialGroup() {
    const SOCIAL_APP = [
        {
            name: 'facebook',
            color: "#3B5998",
            icon: iconFb
        },
        {
            name: 'twitter',
            color: "#00ACEE",
            icon: iconTwitter
        },
        {
            name: 'mail',
            color: "#DB3236",
            icon: iconMail
        },
        {
            name: 'github',
            color: "#211F1F",
            icon: iconGithub
        }
    ]
    return (
        <div className='d-flex w-100 justify-content-center mt-3'>
            {SOCIAL_APP.map((social, id) => {
                return <div role="button" key={`idx_${id}`} className='ms-2 d-flex justify-content-center align-items-center rounded' style={{
                    background: social.color,
                    width: 30,
                    height: 30,
                }}>
                    {social.icon}
                </div>
            })}


        </div>
    )
}

export default SocialGroup;

const iconFb = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.7168 3.49998C11.7168 3.84998 11.4841 4.08331 11.1352 4.08331H9.39046V5.24998H11.1352C11.3097 5.24998 11.4841 5.24998 11.6005 5.42498C11.7168 5.59998 11.7749 5.77498 11.7168 5.94998L11.1352 8.28331C11.077 8.57498 10.8444 8.74998 10.5536 8.74998H9.39046V12.8333C9.39046 13.1833 9.15782 13.4166 8.80888 13.4166H6.48256C6.13362 13.4166 5.90098 13.1833 5.90098 12.8333V8.74998H4.73783C4.38888 8.74998 4.15625 8.51665 4.15625 8.16665V5.83331C4.15625 5.48331 4.38888 5.24998 4.73783 5.24998H5.90098V4.08331C5.90098 2.15831 7.47125 0.583313 9.39046 0.583313H11.1352C11.4841 0.583313 11.7168 0.816646 11.7168 1.16665V3.49998ZM10.3791 6.41665H8.80888C8.45993 6.41665 8.2273 6.18331 8.2273 5.83331V4.08331C8.2273 3.44165 8.75072 2.91665 9.39045 2.91665H10.5536V1.74998H9.39045C8.11098 1.74998 7.06414 2.79998 7.06414 4.08331V5.83331C7.06414 6.18331 6.83151 6.41665 6.48256 6.41665H5.31941V7.58331H6.48256C6.83151 7.58331 7.06414 7.81665 7.06414 8.16665V12.25H8.2273V8.16665C8.2273 7.81665 8.45993 7.58331 8.80888 7.58331H10.0883L10.3791 6.41665Z" fill="black" />
    <mask id="mask0_6_325" maskUnits="userSpaceOnUse" x="4" y="0" width="8" height="14">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.7168 3.49998C11.7168 3.84998 11.4841 4.08331 11.1352 4.08331H9.39046V5.24998H11.1352C11.3097 5.24998 11.4841 5.24998 11.6005 5.42498C11.7168 5.59998 11.7749 5.77498 11.7168 5.94998L11.1352 8.28331C11.077 8.57498 10.8444 8.74998 10.5536 8.74998H9.39046V12.8333C9.39046 13.1833 9.15782 13.4166 8.80888 13.4166H6.48256C6.13362 13.4166 5.90098 13.1833 5.90098 12.8333V8.74998H4.73783C4.38888 8.74998 4.15625 8.51665 4.15625 8.16665V5.83331C4.15625 5.48331 4.38888 5.24998 4.73783 5.24998H5.90098V4.08331C5.90098 2.15831 7.47125 0.583313 9.39046 0.583313H11.1352C11.4841 0.583313 11.7168 0.816646 11.7168 1.16665V3.49998ZM10.3791 6.41665H8.80888C8.45993 6.41665 8.2273 6.18331 8.2273 5.83331V4.08331C8.2273 3.44165 8.75072 2.91665 9.39045 2.91665H10.5536V1.74998H9.39045C8.11098 1.74998 7.06414 2.79998 7.06414 4.08331V5.83331C7.06414 6.18331 6.83151 6.41665 6.48256 6.41665H5.31941V7.58331H6.48256C6.83151 7.58331 7.06414 7.81665 7.06414 8.16665V12.25H8.2273V8.16665C8.2273 7.81665 8.45993 7.58331 8.80888 7.58331H10.0883L10.3791 6.41665Z" fill="white" />
    </mask>
    <g mask="url(#mask0_6_325)">
        <rect x="0.65625" width="14" height="14" fill="white" />
    </g>
</svg>

const iconTwitter = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.768 1.27683C13.9426 1.1595 14.2336 1.1595 14.4083 1.27683C14.5829 1.39415 14.6993 1.6288 14.6411 1.86345C14.4665 2.68473 14.059 3.44734 13.4769 4.09263V4.38594C13.4769 7.61239 12.0799 10.3109 9.57697 11.7188C8.29639 12.4814 6.89939 12.8334 5.44418 12.8334C3.98896 12.8334 2.41734 12.4227 0.962126 11.6014C0.729292 11.4841 0.612875 11.1908 0.671083 10.9562C0.729292 10.7215 1.02033 10.5455 1.25317 10.5455C2.24271 10.5455 3.23225 10.3695 4.10538 9.95889C1.95167 8.60965 1.36958 6.73245 1.31138 5.26588C1.25317 3.56467 1.83525 2.15677 1.89346 2.0981C1.95167 1.92212 2.12629 1.74613 2.35913 1.74613C2.59196 1.74613 2.76659 1.80479 2.883 1.98078C3.87255 3.38868 5.38597 4.26862 7.07401 4.38594C7.07401 3.44734 7.48147 2.5674 8.23818 1.98078C9.46056 0.86619 11.265 0.924852 12.4292 1.98078C12.8949 1.80479 13.3605 1.57014 13.768 1.27683ZM12.2546 4.03397C12.2546 3.85798 12.3128 3.62333 12.4292 3.50601C12.4874 3.41801 12.5456 3.34468 12.6038 3.27136C12.662 3.19803 12.7202 3.1247 12.7784 3.0367C12.7202 3.06604 12.6475 3.0807 12.5747 3.09537C12.5019 3.11003 12.4292 3.1247 12.371 3.15403C12.1964 3.21269 11.9635 3.15403 11.7889 2.97804C11.0904 2.15677 9.7516 2.03944 8.93668 2.80205C8.47101 3.21269 8.23818 3.79932 8.23818 4.38594V4.97257C8.23818 5.26588 7.94714 5.5592 7.6561 5.5592C5.73522 5.61786 3.93076 4.85524 2.65017 3.56467C2.30092 5.03123 2.1845 7.9057 5.56059 9.43093C5.73522 9.48959 5.90984 9.66558 5.90984 9.90023C5.90984 10.1349 5.85163 10.3109 5.6188 10.4282C4.97851 10.8975 4.28001 11.1908 3.5233 11.4255C5.44417 11.8948 7.36505 11.6601 8.99489 10.7215C11.0904 9.48959 12.3128 7.20175 12.3128 4.38594C12.3128 4.26862 12.3128 4.15129 12.2546 4.03397Z" fill="black" />
    <mask id="mask0_6_322" maskUnits="userSpaceOnUse" x="0" y="1" width="15" height="12">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.768 1.27683C13.9426 1.1595 14.2336 1.1595 14.4083 1.27683C14.5829 1.39415 14.6993 1.6288 14.6411 1.86345C14.4665 2.68473 14.059 3.44734 13.4769 4.09263V4.38594C13.4769 7.61239 12.0799 10.3109 9.57697 11.7188C8.29639 12.4814 6.89939 12.8334 5.44418 12.8334C3.98896 12.8334 2.41734 12.4227 0.962126 11.6014C0.729292 11.4841 0.612875 11.1908 0.671083 10.9562C0.729292 10.7215 1.02033 10.5455 1.25317 10.5455C2.24271 10.5455 3.23225 10.3695 4.10538 9.95889C1.95167 8.60965 1.36958 6.73245 1.31138 5.26588C1.25317 3.56467 1.83525 2.15677 1.89346 2.0981C1.95167 1.92212 2.12629 1.74613 2.35913 1.74613C2.59196 1.74613 2.76659 1.80479 2.883 1.98078C3.87255 3.38868 5.38597 4.26862 7.07401 4.38594C7.07401 3.44734 7.48147 2.5674 8.23818 1.98078C9.46056 0.86619 11.265 0.924852 12.4292 1.98078C12.8949 1.80479 13.3605 1.57014 13.768 1.27683ZM12.2546 4.03397C12.2546 3.85798 12.3128 3.62333 12.4292 3.50601C12.4874 3.41801 12.5456 3.34468 12.6038 3.27136C12.662 3.19803 12.7202 3.1247 12.7784 3.0367C12.7202 3.06604 12.6475 3.0807 12.5747 3.09537C12.5019 3.11003 12.4292 3.1247 12.371 3.15403C12.1964 3.21269 11.9635 3.15403 11.7889 2.97804C11.0904 2.15677 9.7516 2.03944 8.93668 2.80205C8.47101 3.21269 8.23818 3.79932 8.23818 4.38594V4.97257C8.23818 5.26588 7.94714 5.5592 7.6561 5.5592C5.73522 5.61786 3.93076 4.85524 2.65017 3.56467C2.30092 5.03123 2.1845 7.9057 5.56059 9.43093C5.73522 9.48959 5.90984 9.66558 5.90984 9.90023C5.90984 10.1349 5.85163 10.3109 5.6188 10.4282C4.97851 10.8975 4.28001 11.1908 3.5233 11.4255C5.44417 11.8948 7.36505 11.6601 8.99489 10.7215C11.0904 9.48959 12.3128 7.20175 12.3128 4.38594C12.3128 4.26862 12.3128 4.15129 12.2546 4.03397Z" fill="white" />
    </mask>
    <g mask="url(#mask0_6_322)">
        <rect x="0.65625" width="14" height="14" fill="white" />
    </g>
</svg>

const iconMail = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.3236 1.75H2.99023C1.99857 1.75 1.24023 2.50833 1.24023 3.5V10.5C1.24023 11.4917 1.99857 12.25 2.99023 12.25H12.3236C13.3152 12.25 14.0736 11.4917 14.0736 10.5V3.5C14.0736 2.50833 13.3152 1.75 12.3236 1.75ZM2.99023 2.91667H12.3236C12.5569 2.91667 12.7319 3.03333 12.8486 3.26667L7.6569 6.88333L2.46523 3.26667C2.5819 3.03333 2.7569 2.91667 2.99023 2.91667ZM2.4069 10.5C2.4069 10.85 2.64023 11.0833 2.99023 11.0833H12.3236C12.6736 11.0833 12.9069 10.85 12.9069 10.5V4.60833L8.0069 8.05C7.89023 8.10833 7.77357 8.16667 7.6569 8.16667C7.54023 8.16667 7.42357 8.10833 7.3069 8.05L2.4069 4.60833V10.5Z" fill="black" />
    <mask id="mask0_6_319" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="12">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.3236 1.75H2.99023C1.99857 1.75 1.24023 2.50833 1.24023 3.5V10.5C1.24023 11.4917 1.99857 12.25 2.99023 12.25H12.3236C13.3152 12.25 14.0736 11.4917 14.0736 10.5V3.5C14.0736 2.50833 13.3152 1.75 12.3236 1.75ZM2.99023 2.91667H12.3236C12.5569 2.91667 12.7319 3.03333 12.8486 3.26667L7.6569 6.88333L2.46523 3.26667C2.5819 3.03333 2.7569 2.91667 2.99023 2.91667ZM2.4069 10.5C2.4069 10.85 2.64023 11.0833 2.99023 11.0833H12.3236C12.6736 11.0833 12.9069 10.85 12.9069 10.5V4.60833L8.0069 8.05C7.89023 8.10833 7.77357 8.16667 7.6569 8.16667C7.54023 8.16667 7.42357 8.10833 7.3069 8.05L2.4069 4.60833V10.5Z" fill="white" />
    </mask>
    <g mask="url(#mask0_6_319)">
        <rect x="0.65625" width="14" height="14" fill="white" />
    </g>
</svg>

const iconGithub = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
    <path d="M10.62 10.1024C10.7391 10.4515 10.7986 10.8587 10.7986 11.2077V13.4183C10.7986 13.7673 10.5605 14 10.2032 14C9.84593 14 9.60775 13.7673 9.60775 13.4183V11.1495C9.66729 10.6842 9.48866 10.3351 9.19094 10.0443C9.01231 9.86974 8.95276 9.63705 9.07185 9.46253C9.13139 9.22984 9.36957 9.1135 9.5482 9.05532C11.275 8.88081 12.8827 8.29908 12.8827 5.56498C12.8827 4.92508 12.6445 4.28518 12.1682 3.76163C11.9895 3.58711 11.9895 3.35442 12.0491 3.17991C12.2277 2.71453 12.2277 2.24915 12.1086 1.78377C11.8109 1.84194 11.3345 2.01646 10.5605 2.54001C10.4414 2.65636 10.2627 2.65636 10.0841 2.59818C8.83367 2.24915 7.46415 2.24915 6.21373 2.59818C6.03509 2.65636 5.85646 2.65636 5.67783 2.54001C4.9633 2.01646 4.4274 1.84194 4.12968 1.78377C4.01059 2.24915 4.01059 2.71453 4.18922 3.17991C4.24877 3.4126 4.24877 3.64529 4.07013 3.76163C3.59378 4.28518 3.3556 4.92508 3.3556 5.56498C3.3556 8.29908 4.9633 8.88081 6.69008 9.05532C6.92826 9.05532 7.10689 9.22984 7.16643 9.46253C7.22598 9.69522 7.16643 9.92791 7.04735 10.0443C6.74962 10.3351 6.63054 10.6842 6.63054 11.0914V11.6149V11.6731V13.3601C6.63054 13.7091 6.39236 13.9418 6.03509 13.9418C5.67783 13.9418 5.43965 13.7091 5.43965 13.3601V12.3712C3.65332 12.662 2.87925 11.6731 2.34335 11.0332C2.10517 10.7423 1.92654 10.5096 1.68836 10.4515C1.39064 10.3933 1.15246 10.0443 1.27155 9.75339C1.3311 9.46253 1.68836 9.22984 1.98608 9.34619C2.58153 9.5207 2.93879 9.92791 3.29606 10.3351C3.77241 10.975 4.18922 11.4404 5.43965 11.2077V11.1495C5.43965 10.8005 5.49919 10.3933 5.61828 10.1024C3.95104 9.75339 2.16472 8.70629 2.16472 5.62315C2.16472 4.75056 2.46244 3.93615 2.99834 3.29625C2.76016 2.48184 2.8197 1.7256 3.17697 0.969355C3.23651 0.794838 3.3556 0.678493 3.53423 0.620321C3.77241 0.562148 4.54649 0.445803 6.15418 1.43473C7.46415 1.14387 8.83367 1.14387 10.0841 1.43473C11.6323 0.445803 12.4659 0.562148 12.704 0.620321C12.8827 0.678493 13.0018 0.794838 13.0613 0.969355C13.359 1.7256 13.4186 2.48184 13.2399 3.23808C13.7758 3.87798 14.0736 4.69239 14.0736 5.56498C14.0736 8.88081 12.0491 9.81157 10.62 10.1024Z" fill="black" />
    <mask id="mask0_6_316" maskUnits="userSpaceOnUse" x="1" y="0" width="14" height="14">
        <path d="M10.62 10.1024C10.7391 10.4515 10.7986 10.8587 10.7986 11.2077V13.4183C10.7986 13.7673 10.5605 14 10.2032 14C9.84593 14 9.60775 13.7673 9.60775 13.4183V11.1495C9.66729 10.6842 9.48866 10.3351 9.19094 10.0443C9.01231 9.86974 8.95276 9.63705 9.07185 9.46253C9.13139 9.22984 9.36957 9.1135 9.5482 9.05532C11.275 8.88081 12.8827 8.29908 12.8827 5.56498C12.8827 4.92508 12.6445 4.28518 12.1682 3.76163C11.9895 3.58711 11.9895 3.35442 12.0491 3.17991C12.2277 2.71453 12.2277 2.24915 12.1086 1.78377C11.8109 1.84194 11.3345 2.01646 10.5605 2.54001C10.4414 2.65636 10.2627 2.65636 10.0841 2.59818C8.83367 2.24915 7.46415 2.24915 6.21373 2.59818C6.03509 2.65636 5.85646 2.65636 5.67783 2.54001C4.9633 2.01646 4.4274 1.84194 4.12968 1.78377C4.01059 2.24915 4.01059 2.71453 4.18922 3.17991C4.24877 3.4126 4.24877 3.64529 4.07013 3.76163C3.59378 4.28518 3.3556 4.92508 3.3556 5.56498C3.3556 8.29908 4.9633 8.88081 6.69008 9.05532C6.92826 9.05532 7.10689 9.22984 7.16643 9.46253C7.22598 9.69522 7.16643 9.92791 7.04735 10.0443C6.74962 10.3351 6.63054 10.6842 6.63054 11.0914V11.6149V11.6731V13.3601C6.63054 13.7091 6.39236 13.9418 6.03509 13.9418C5.67783 13.9418 5.43965 13.7091 5.43965 13.3601V12.3712C3.65332 12.662 2.87925 11.6731 2.34335 11.0332C2.10517 10.7423 1.92654 10.5096 1.68836 10.4515C1.39064 10.3933 1.15246 10.0443 1.27155 9.75339C1.3311 9.46253 1.68836 9.22984 1.98608 9.34619C2.58153 9.5207 2.93879 9.92791 3.29606 10.3351C3.77241 10.975 4.18922 11.4404 5.43965 11.2077V11.1495C5.43965 10.8005 5.49919 10.3933 5.61828 10.1024C3.95104 9.75339 2.16472 8.70629 2.16472 5.62315C2.16472 4.75056 2.46244 3.93615 2.99834 3.29625C2.76016 2.48184 2.8197 1.7256 3.17697 0.969355C3.23651 0.794838 3.3556 0.678493 3.53423 0.620321C3.77241 0.562148 4.54649 0.445803 6.15418 1.43473C7.46415 1.14387 8.83367 1.14387 10.0841 1.43473C11.6323 0.445803 12.4659 0.562148 12.704 0.620321C12.8827 0.678493 13.0018 0.794838 13.0613 0.969355C13.359 1.7256 13.4186 2.48184 13.2399 3.23808C13.7758 3.87798 14.0736 4.69239 14.0736 5.56498C14.0736 8.88081 12.0491 9.81157 10.62 10.1024Z" fill="white" />
    </mask>
    <g mask="url(#mask0_6_316)">
        <rect x="0.65625" width="14" height="14" fill="white" />
    </g>
</svg>