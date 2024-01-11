/*components */
import popUp from "./popUp"
import newsPosts from "./newsPosts"

/*main routes */
import firstMgt from "./firstMgt"

/*model schemas */
import girlsClubModels from "./girlsClubModels"
import boysSquadModels from "./boysSquadModels"

/*model routes */
import girlsClubInTown from "./girlsClubInTown"
import girlsClubOutOfTown from "./girlsClubOutOfTown"
import girlsClubUpcoming from "./girlsClubUpcoming"
import boysSquadInTown from "./boysSquadInTown"
import boysSquadOutOfTown from "./boysSquadOutOfTown"
import boysSquadUpComing from "./boysSquadUpComing"

export const schemaTypes = [
    popUp,
    firstMgt,
    newsPosts,
    girlsClubModels,
    girlsClubInTown,
    girlsClubOutOfTown,
    girlsClubUpcoming,

    boysSquadModels,
    boysSquadInTown,
    boysSquadOutOfTown,
    boysSquadUpComing,
]
