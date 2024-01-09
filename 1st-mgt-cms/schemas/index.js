/*components */
import popUp from "./popUp"

/*main routes */
import firstMgt from "./firstMgt"

/*model schemas */
import girlsClubModels from "./girlsClubModels"
import boysSquadModels from "./boysSquadModels"

/*model routes */
import girlsClubInTownPage from "./girlsClubInTownPage"
import girlsClubOutOfTown from "./girlsClubOutOfTown"
import girlsClubUpcoming from "./girlsClubUpcoming"
import boysSquadInTownPage from "./boysSquadInTownPage"

export const schemaTypes = [
    popUp,
    firstMgt,
    girlsClubModels,
    girlsClubInTownPage,
    girlsClubOutOfTown,
    girlsClubUpcoming,

    boysSquadModels,
    boysSquadInTownPage,
]
