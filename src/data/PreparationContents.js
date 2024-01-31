const d0 = (
    <>
        <p>
            The journey begins by articulating your vision for your new home. The most effective approach is to create a comprehensive list categorizing must-haves, needs, and wants. This step is incredibly beneficial as it allows you to streamline your house search with your real estate agent later in the process.
        </p>
    </>
)

const d1 = (
    <>
        <p>
            Before you begin the rest of your journey, if you are looking to qualify for any home finance assistance programs in Boston, you are REQUIRED to take the Boston Home-buying 101 class. This class provides you with critical information that will help you throughout the home buying process. You can find the link to register below.
        </p>
    </>
)

const d2 = (
    <>
        <p>
            Craft a budget with <em>SMART</em> principles in mind—be Specific, Measurable, Attainable, Realistic, and Time-bound. Consider all explicit costs, from fixed expenses to discretionary spending, and maintain a folder for the documents required in the home-buying process. This ensures realistic expectations and informed decision-making as you define your preferences for a new home.
        </p>
    </>
)

const d3 = (
    <>
        <p>
            Before you begin the rest of your journey, if you are looking to qualify for any home finance assistance programs in Boston, you are REQUIRED to take the Boston Home-buying 101 class. This class provides you with critical information that will help you throughout the home buying process. You can find the link to register below.
        </p>
    </>
)

const d4 = (
    <>
        <p>
            Before beginning the next stage, it is important to find and gather all necessary documents like paystubs, bank statements etc. so that the process is a little easier going forward. In general, a good rule to follow is to gather all documents that relate to your financial history and identity.
        </p>
    </>
)

const PreparationContents = [
    {
        "section": "Wants & Needs",
        "description": d0,
        "resources": [
            {
                name: "Wants and Needs Checklist",
                url: "https://www.lowermybills.com/page_assets/static/77a2bfb154e47ddaf0b64ed6f2720612/LMB_WantsVsNeedsVsMustHavesChecklist_Final.pdf"
            }
        ],
        "barriers": "None"
    },
    {
        "section": "Homebuying Education",
        "description": d1,
        "resources": "None",
        "barriers": "This course will take 1-4 days and will cost $50-100."
    },
    {
        "section": "Create Your Budget",
        "description": d2,
        "resources": [{ name: "Homebuyer 101 Registration", url: "https://www.boston.gov/departments/housing/boston-home-center/boston-home-center-classes#additional-homebuyer-classes" }],
        "barriers": "Down payment requirements can be 3% for a lot of mortgage programs or 1.5% purchase price at bhc, plan accordingly!"
    },
    {
        "section": "Build Your Credit",
        "description": d3,
        "resources": "None",
        "barriers": "Your credit must be at 660 to be pre-approved later in the process."
    },
    {
        "section": "Gather Documents",
        "description":
            d4,
        "resources": [
            {
                name: "Documents Needed for Preapproval",
                url: "https://www.bankrate.com/mortgages/documents-for-preapproval/"
            }
        ],
        "barriers": "None"
    }
]
export { PreparationContents };