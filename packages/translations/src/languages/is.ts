import type { Language } from '../types.js'

export const isTranslations = {
  authentication: {
    account: 'Aðgangur',
    accountOfCurrentUser: 'Aðgangur notanda',
    accountVerified: 'Aðgangur staðfestur.',
    alreadyActivated: 'Þegar virkur',
    alreadyLoggedIn: 'Þegar innskráður',
    apiKey: 'API lykill',
    authenticated: 'Auðkenndur',
    backToLogin: 'Aftur á innskráningu',
    beginCreateFirstUser: 'Til að byrja, skráðu þinn fyrsta notanda.',
    changePassword: 'Breyta lykilorði',
    checkYourEmailForPasswordReset:
      'Athugaðu pósthólfið þitt til að fá hlekk til að endursetja lykilorðið á öruggan hátt.',
    confirmGeneration: 'Staðfestu sjálfvirka myndun',
    confirmPassword: 'Staðfestu lykilorð',
    createFirstUser: 'Skrá fyrsta notanda',
    emailNotValid: 'Netfangið er ekki gilt',
    emailOrUsername: 'Netfang eða notandanafn',
    emailSent: 'Tölvupóstur sendur',
    emailVerified: 'Netfang staðfest.',
    enableAPIKey: 'Virkja API lykil',
    failedToUnlock: 'Aflæsing tókst ekki',
    forceUnlock: 'Þvinga aflæsingu',
    forgotPassword: 'Gleymt lykilorð',
    forgotPasswordEmailInstructions:
      'Vinsamlega sláðu inn netfangið þitt. Þú munt fá tölvupóst með leiðbeiningum um hvernig á að endursetja lykilorð.',
    forgotPasswordQuestion: 'Gleymt lykilorð?',
    forgotPasswordUsernameInstructions:
      'Vinsamlega sláðu inn notandanafnið þitt. Leiðbeiningar um hvernig á að endursetja lykilorð verða sendar á netfang sem er skráð fyrir notandanafnið.',
    generate: 'Mynda sjálfvirkt',
    generateNewAPIKey: 'Sjálfvirkt mynda nýjan API lykil',
    generatingNewAPIKeyWillInvalidate:
      'Að mynda nýjan API lykil mun <1>óvirkja</1> fyrri lykil. Ertu viss um að halda áfram?',
    lockUntil: 'Læsa þangað til',
    logBackIn: 'Innskrá aftur',
    loggedIn: 'Til að innsrká með öðrum notanda, þarftu að <0>útskrá</0> first.',
    loggedInChangePassword:
      'Til að breyta lykilorði, farðu á <0>reikninginn</0> þinn og breyttu lykilorðinu þar.',
    loggedOutInactivity: 'Þú hefur verið útskráður vegna óvirkni.',
    loggedOutSuccessfully: 'Útskráning tókst.',
    loggingOut: 'Útskrái...',
    login: 'Innskrá',
    loginAttempts: 'Innskráningar tilraunir',
    loginUser: 'Innskrá notanda',
    loginWithAnotherUser: 'Til að innsrká með öðrum notanda, þarftu að <0>útskrá</0> first.',
    logOut: 'Útskrá',
    logout: 'Útskrá',
    logoutSuccessful: 'Útskráning tókst.',
    logoutUser: 'Útskrá notanda',
    newAccountCreated:
      'Nýr aðgangur hefur verið stofnaður til að opna <a href="{{serverURL}}">{{serverURL}}</a> Vinsamlega smelltu á eftirfarandi hlekk eða afritaðu slóðina hér að neðan inn í vafrann þinn til að staðfesta netfangið þitt: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Eftir að þú staðfestir netfangið munt þú geta innskráð þig.',
    newAPIKeyGenerated: 'Nýr API lykill myndaður.',
    newPassword: 'Nýtt lykilorð',
    passed: 'Auðkenning tókst',
    passwordResetSuccessfully: 'Lykilorð endursett.',
    resetPassword: 'Endursetja lykilorð',
    resetPasswordExpiration: 'Endursetning lykilorðs rennur út',
    resetPasswordToken: 'Endursetja lykilorðs tóka',
    resetYourPassword: 'Endursetja lykilorð',
    stayLoggedIn: 'Haldast innskráður',
    successfullyRegisteredFirstUser: 'Skráning fyrsta notanda tókst.',
    successfullyUnlocked: 'Aflæsing tókst',
    tokenRefreshSuccessful: 'Endursetning tóka tókst.',
    unableToVerify: 'Staðfesting tókst ekki',
    username: 'Notandanafn',
    usernameNotValid: 'Notandanafnið sem þú skráður er ekki gilt',
    verified: 'Staðfest',
    verifiedSuccessfully: 'Staðfesting tókst',
    verify: 'Staðfesta',
    verifyUser: 'Staðfesta notanda',
    verifyYourEmail: 'Staðfestu netfangið þitt',
    youAreInactive:
      'Þú hefur verið óvirkur í smá tíma og munt fljótlega verða útsrkáður af öryggisástæðum. Viltu haldast innskráður?',
    youAreReceivingResetPassword:
      'Þér var sent þetta vegna þess að þú (eða einhver annar) bað um að endursetja lykilorðið fyrir aðganginn þinn. Vinsamlega smelltu á eftirfarandi hlekk, eða afritaðu hann í vafrann þinn til að klára ferlið:',
    youDidNotRequestPassword:
      'Ef þú baðst ekki um þetta, vinsamlega hunsaðu tölvupóstinn og lykilorðið þitt mun haldast óbreytt.',
  },
  error: {
    accountAlreadyActivated: 'Þessi aðgangur hefur þegar verið virkjaður.',
    autosaving: 'Villa kom upp við sjálfvirka vistun á færslu.',
    correctInvalidFields: 'Vinsamlega leiðréttu rangt skráða reiti.',
    deletingFile: 'Villa kom upp við að eyða skrá.',
    deletingTitle:
      'Villa kom upp við að eyða {{title}}. Vinsamlega athugaðu tenginguna þína og prófaðu aftur.',
    emailOrPasswordIncorrect: 'Netfang eða lykilorð var ekki rétt slegið inn.',
    followingFieldsInvalid_one: 'Eftirfarandi reitur er rangt skráður:',
    followingFieldsInvalid_other: 'Eftirfarandi reitir eru rangt skráðir:',
    incorrectCollection: 'Röng færslutegund',
    invalidFileType: 'Röng skráartegund',
    invalidFileTypeValue: 'Röng skráartegund: {{value}}',
    invalidRequestArgs: 'Invalid arguments passed in request: {{args}}',
    loadingDocument: 'Villa kom upp við að sækja færslu með ID: {{id}}.',
    localesNotSaved_one: 'Ekki tókst að vista eftirfarandi tungumál:',
    localesNotSaved_other: 'Ekki tókst að vista eftirfarandi tungumál:',
    logoutFailed: 'Útskráning tókst ekki.',
    missingEmail: 'Netfang vantar.',
    missingIDOfDocument: 'Vantar ID fyrir færslu til að uppfæra.',
    missingIDOfVersion: 'Vantar ID fyrir útgáfu.',
    missingRequiredData: 'Vantar nauðsinleg gögn.',
    noFilesUploaded: 'Engum skjölum var hlaðið upp.',
    noMatchedField: 'Enginn reitur fannst fyrir "{{label}}"',
    notAllowedToAccessPage: 'Þú hefur ekki aðgang að þessari síðu.',
    notAllowedToPerformAction: 'Þú hefur ekki heimild til að framkvæma þessa aðgerð.',
    notFound: 'Umbeðin vísun fannst ekki.',
    noUser: 'Enginn notandi',
    previewing: 'Villa kom upp við að forskoða færslu.',
    problemUploadingFile: 'Villa kom upp við að hlaða upp skrá.',
    tokenInvalidOrExpired: 'Tóki er annað hvort ógildur eða útrunninn.',
    tokenNotProvided: 'Tóki ekki veittur.',
    unableToDeleteCount: 'Gat ekki eytt {{count}} af {{total}} {{label}}.',
    unableToReindexCollection: 'Error reindexing collection {{collection}}. Aðgerð hætt.',
    unableToUpdateCount: 'Gat ekki uppfært {{count}} af {{total}} {{label}}.',
    unauthorized: 'Óheimilt, þú verður að vera innskráður til að gera þessa beiðni.',
    unknown: 'Óþekkt villa kom upp.',
    unPublishingDocument: 'Villa kom upp við að taka færsluna úr birtingu.',
    unspecific: 'Villa kom upp.',
    userEmailAlreadyRegistered: 'Notandi með þetta netfang er þegar skráður.',
    userLocked: 'Þessi notandi er læstur vegna of margra innskráningartilrauna.',
    usernameAlreadyRegistered: 'Notandi með þetta notandanafn er þegar skráður.',
    usernameOrPasswordIncorrect: 'Notandanafn eða lykilorð er rangt.',
    valueMustBeUnique: 'Gildi verður að vera einstakt',
    verificationTokenInvalid: 'Staðfestingar tóki er ógildur.',
  },
  fields: {
    addLabel: 'Bæta við {{label}}',
    addLink: 'Bæta við hlekk',
    addNew: 'Bæta við nýju',
    addNewLabel: 'Bæta við {{label}}',
    addRelationship: 'Bæta við tengingu',
    addUpload: 'Bæta við skrá',
    block: 'blokk',
    blocks: 'blokkir',
    blockType: 'Blokkar tegund',
    chooseBetweenCustomTextOrDocument:
      'Veldu á milli að slá inn sérsniðna slóð eða tengja við aðra færslu.',
    chooseDocumentToLink: 'Veldu færslu til að tengja við',
    chooseFromExisting: 'Velja af skráðum',
    chooseLabel: 'Veldu {{label}}',
    collapseAll: 'Fella allt saman',
    customURL: 'Sérsniðin slóð',
    editLabelData: 'Breyta {{label}} gögnum',
    editLink: 'Breyta hlekk',
    editRelationship: 'Breyta tengingu',
    enterURL: 'Sláðu inn slóð',
    internalLink: 'Innri hlekkur',
    itemsAndMore: '{{items}} og {{count}} í viðbót',
    labelRelationship: '{{label}} tenging',
    latitude: 'Breiddargráða',
    linkedTo: 'Hlekkjað í <0>{{label}}</0>',
    linkType: 'Tegund hlekks',
    longitude: 'Lengdargráða',
    newLabel: 'Nýtt {{label}}',
    openInNewTab: 'Opna í nýjum flipa',
    passwordsDoNotMatch: 'Lykilorð eru ekki eins.',
    relatedDocument: 'Tengdar færslur',
    relationTo: 'Tenging í',
    removeRelationship: 'Fjarlægja tengingu',
    removeUpload: 'Fjarlægja skrá',
    saveChanges: 'Vista breytingar',
    searchForBlock: 'Leita að blokk',
    selectExistingLabel: 'Veldu núverandi {{label}}',
    selectFieldsToEdit: 'Veldu reit til að breyta',
    showAll: 'Sýna allt',
    swapRelationship: 'Skipta út tengingu',
    swapUpload: 'Skipta út skrá',
    textToDisplay: 'Texti til að birta',
    toggleBlock: 'Fletta blokk',
    uploadNewLabel: 'Hlaða upp nýju {{label}}',
  },
  general: {
    aboutToDelete: 'Þú ert að fara að eyða {{label}} <1>{{title}}</1>. Ertu viss?',
    aboutToDeleteCount_many: 'Þú ert að fara að eyða {{count}} {{label}}',
    aboutToDeleteCount_one: 'Þú ert að fara að eyða {{count}} {{label}}',
    aboutToDeleteCount_other: 'Þú ert að fara að eyða {{count}} {{label}}',
    addBelow: 'Bæta við fyrir neðan',
    addFilter: 'Bæta við síu',
    adminTheme: 'Stjórnborðs þema',
    allCollections: 'Allar færslutegundir',
    and: 'og',
    anotherUser: 'Annar notandi',
    anotherUserTakenOver: 'Annar notandi hefur tekið yfir skráningu þessar færslu.',
    applyChanges: 'Virkja breytingar',
    ascending: 'Hækkandi',
    automatic: 'Sjálfvirkt',
    backToDashboard: 'Aftur í yfirlit',
    cancel: 'Hætta við',
    changesNotSaved:
      'Þú hefur ekki vistað breytingarnar. Ef þú ferð núna, munu breytingarnar glatast.',
    clearAll: 'Hreinsa allt',
    close: 'Loka',
    collapse: 'Fella saman',
    collections: 'Færslu flokkar',
    columns: 'Dálkar',
    columnToSort: 'Dálkur til að raða',
    confirm: 'Staðfesta',
    confirmCopy: 'Staðfesta afritun',
    confirmDeletion: 'Staðfesta eyðingu',
    confirmDuplication: 'Staðfesta tvöföldun',
    confirmReindex: 'Reindexa allar {{collections}}?',
    confirmReindexAll: 'Reindexa allar færslutegundir?',
    confirmReindexDescription:
      'Þetta mun eyða núverandi index og reindexa færslur í {{collections}} færslutegundum.',
    confirmReindexDescriptionAll:
      'Þetta mun eyða núverandi indexeum og reindexa færslur í öllum færslutegundum.',
    copied: 'Afritað',
    copy: 'Afrita',
    copying: 'Afrita',
    copyWarning: 'Þú munt yfirskrifa {{to}} með {{from}} fyrir {{label}} {{title}}. Ertu viss?',
    create: 'Nýskrá',
    created: 'Nýskráð',
    createdAt: 'Nýskráð:',
    createNew: 'Nýskrá',
    createNewLabel: 'Nýskrá: {{label}}',
    creating: 'Nýskrái',
    creatingNewLabel: 'Nýskrái {{label}}',
    currentlyEditing:
      'er að vinna í þessari færslu. Ef þú tekur yfir, mun viðkomandi ekki geta haldið áfram að vinna í færslu, og gætu glatað óvistuðum breytingum.',
    custom: 'Sérsniðin',
    dark: 'Dökkt',
    dashboard: 'Yfirlit',
    delete: 'Eyða',
    deletedCountSuccessfully: 'Eyðing {{count}} {{label}} tókst.',
    deletedSuccessfully: 'Eyðing tókst.',
    deleting: 'Eyði...',
    depth: 'Dýpt',
    descending: 'Lækkandi',
    deselectAllRows: 'Afvelja allar raðir',
    document: 'Færsla',
    documentLocked: 'Færsla læst',
    documents: 'Færslur',
    duplicate: 'Tvöfalda',
    duplicateWithoutSaving: 'Tvöfalda án þess að vista breytingar',
    edit: 'Breyta',
    editedSince: 'Breytt síðan',
    editing: 'Breyti',
    editingLabel_many: 'Breyti {{count}} {{label}}',
    editingLabel_one: 'Breyti {{count}} {{label}}',
    editingLabel_other: 'Breyti {{count}} {{label}}',
    editingTakenOver: 'Breyting yfirtekin',
    editLabel: 'Breyta {{label}}',
    email: 'Netfang',
    emailAddress: 'Netfang',
    enterAValue: 'Sláðu inn gildi',
    error: 'Villa',
    errors: 'Villur',
    fallbackToDefaultLocale: 'Nota sjálfgefið tungumál',
    false: 'Rangt',
    filter: 'Sía',
    filters: 'Síur',
    filterWhere: 'Sía {{label}} þar sem',
    globals: 'Færslutegundir',
    goBack: 'Til baka',
    isEditing: 'er að breyta',
    language: 'Tungumál',
    lastModified: 'Síðast breytt',
    leaveAnyway: 'Hætta samt',
    leaveWithoutSaving: 'Hætta án þess að vista',
    light: 'Ljóst',
    livePreview: 'Lifandi forskoðun',
    loading: 'Hleð',
    locale: 'Tungumál',
    locales: 'Tungumál',
    menu: 'Valmynd',
    moveDown: 'Færa niður',
    moveUp: 'Færa upp',
    newPassword: 'Nýtt lykilorð',
    next: 'Næsta',
    noFiltersSet: 'Engar síur virkar',
    noLabel: '<Ekkert {{label}}>',
    none: 'Ekkert',
    noOptions: 'Engir möguleikar',
    noResults:
      'Engar {{label}} fundust. Annað hvort er engin {{label}} til eða ekkert passar við síu sem þú hefur valið fyrir ofan.',
    notFound: 'Fannst ekki',
    nothingFound: 'Ekkert fannst',
    noValue: 'Ekkert gildi',
    of: 'af',
    only: 'Einungis',
    open: 'Opna',
    or: 'Eða',
    order: 'Röðun',
    overwriteExistingData: 'Yfirskrifa skráð gögn í reit',
    pageNotFound: 'Síða fannst ekki',
    password: 'Lykilorð',
    payloadSettings: 'Payload stillingar',
    perPage: 'Á síðu: {{limit}}',
    previous: 'Fyrri',
    reindex: 'Endursetja leitargrunn',
    reindexingAll: 'Endursetja leitargrunn fyrir allt {{collections}}.',
    remove: 'Fjarlægja',
    reset: 'Reset',
    row: 'Röð',
    rows: 'Raðir',
    save: 'Vista',
    saving: 'Vista...',
    searchBy: 'Leita eftir {{label}}',
    selectAll: 'Velja allar {{count}} {{label}}',
    selectAllRows: 'Velja allar línur',
    selectedCount: '{{count}} {{label}} valið',
    selectValue: 'Veldu gildi',
    showAllLabel: 'Sýna allar {{label}}',
    sorryNotFound: 'Því miður, það er ekkert sem samsvarar beiðni þinni.',
    sort: 'Raða',
    sortByLabelDirection: 'Raða eftir {{label}} {{direction}}',
    stayOnThisPage: 'Áfram á síðu',
    submissionSuccessful: 'Sending tókst.',
    submit: 'Senda',
    submitting: 'Sendi...',
    success: 'Tókst',
    successfullyCreated: '{{label}} var nýskráð.',
    successfullyDuplicated: '{{label}} tvöfaldað.',
    successfullyReindexed:
      'Endursetti leitargrunn fyrir {{count}} af {{total}} færslum fyrir {{collections}}',
    takeOver: 'Taka yfir',
    thisLanguage: 'Íslenska',
    titleDeleted: '{{label}} "{{title}}" var eytt.',
    true: 'Satt',
    unauthorized: 'Ekki heimild',
    unsavedChanges: 'Þú ert með óvistaðar breytingar. Vistaðu eða eyddu til að halda áfram.',
    unsavedChangesDuplicate: 'Þú ert með óvistaðar breytingar. Viltu halda áfram við að tvöfalda?',
    untitled: 'Ónefnt',
    updatedAt: 'Uppfært:',
    updatedCountSuccessfully: 'Uppfærsla {{count}} {{label}} tókst.',
    updatedSuccessfully: 'Uppfærsla tókst.',
    updating: 'Uppfæri',
    uploading: 'Hleð upp',
    uploadingBulk: 'Hleð upp {{current}} af {{total}}',
    user: 'Notandi',
    username: 'Notandanafn',
    users: 'Notendur',
    value: 'Gildi',
    viewReadOnly: 'Skoða í les ham',
    welcome: 'Velkomin/n',
  },
  localization: {
    cannotCopySameLocale: 'Ekki hægt að afrita á sama tungumál',
    copyFrom: 'Afrita frá',
    copyFromTo: 'Afrita frá {{from}} til {{to}}',
    copyTo: 'Afrita til',
    copyToLocale: 'Afrita á tungumál',
    selectLocaleToCopy: 'Velja tungumál til að afrita á',
  },
  operators: {
    contains: 'inniheldur',
    equals: 'jafngildir',
    exists: 'er til',
    intersects: 'skerast',
    isGreaterThan: 'er stærra en',
    isGreaterThanOrEqualTo: 'er stærra eða jafnt og',
    isIn: 'er inni í',
    isLessThan: 'er minna en',
    isLessThanOrEqualTo: 'er minna eða jafnt og',
    isLike: 'er svipað og',
    isNotEqualTo: 'jafngildir ekki',
    isNotIn: 'er ekki í',
    near: 'nálægt',
    within: 'inni í',
  },
  upload: {
    addFile: 'Bæta við skrá',
    addFiles: 'Bæta við skrám',
    bulkUpload: 'Magn upphal',
    crop: 'Klippa',
    cropToolDescription:
      'Dragðu til hornin á völdu svæði, teiknaðu nýtt svæði eða breyttu gildunum fyrir neðan.',
    dragAndDrop: 'Dragðu og slepptu skrá hér',
    dragAndDropHere: 'eða dragðu og slepptu skrá hér',
    editImage: 'Breyta mynd',
    fileName: 'Skráarheiti',
    fileSize: 'Skráarstærð',
    filesToUpload: 'Skrár til að hlaða upp',
    fileToUpload: 'Skrá til að hlaða upp',
    focalPoint: 'Fókus punktur',
    focalPointDescription: 'Dragðu fókus punktinn á myndinni eða breyttu gildunum fyrir neðan.',
    height: 'Hæð',
    lessInfo: 'Minni upplýsingar',
    moreInfo: 'Meiri upplýsingar',
    pasteURL: 'Líma slóð',
    previewSizes: 'Skoða stærðir',
    selectCollectionToBrowse: 'Veldu færslutegund til að skoða',
    selectFile: 'Veldu skrá',
    setCropArea: 'Setja klippi svæði',
    setFocalPoint: 'Setja fókus punkt',
    sizes: 'Stærðir',
    sizesFor: 'Stærðir fyrir {{label}}',
    width: 'Breydd',
  },
  validation: {
    emailAddress: 'Vinsamlega sláðu inn gilt netfang.',
    enterNumber: 'Vinsamlega sláðu inn gilt númer.',
    fieldHasNo: 'Þessi reitur hefur ekkert {{label}}',
    greaterThanMax: '{{value}} er meira en hámark {{label}} af {{max}}.',
    invalidInput: 'Þessi reitur hefur ógilt gildi.',
    invalidSelection: 'Þessi reitur hefur ógilt val.',
    invalidSelections: 'Þessi reitur hefur eftirfarandi ógilt val:',
    lessThanMin: '{{value}} er minna en lágmarks {{label}} af {{min}}.',
    limitReached: 'Takmarki náð, einungis {{max}} getur verið bætt við.',
    longerThanMin: 'Gildið þarf að vera að lágmarki {{minLength}} stafir.',
    notValidDate: '"{{value}}" er ekki gild dagsetning.',
    required: 'Þessi reitur er nauðsynlegur.',
    requiresAtLeast: 'Þessi reitur þarf að minnsta kosti {{count}} {{label}}.',
    requiresNoMoreThan: 'Þessi reitur þarf fleiri en {{count}} {{label}}.',
    requiresTwoNumbers: 'Þessi reitur þarf tvær tölur.',
    shorterThanMax: 'Þetta gildi þarf að vera styttra en hámarkið {{maxLength}} stafir.',
    trueOrFalse: 'Þessi reitur getur bara verið rétt eða rangt.',
    username:
      'Vinsamlega sláðu inn gilt notandanafn. Getur innihaldið bókstafi, tölur, bandstrik, punkta og undirstrik.',
    validUploadID: 'Þessi reitur er ekki gilt upphals ID.',
  },
  version: {
    type: 'Tegund',
    aboutToPublishSelection: 'Þú ert að fara að gefa út allar valdar {{label}}. Ertu viss?',
    aboutToRestore: 'Þú munt endurheimta {{label}} í þá stöðu sem það var á {{versionDate}}.',
    aboutToRestoreGlobal: 'Þú munt endurheimta {{label}} í þá stöðu sem það var á {{versionDate}}.',
    aboutToRevertToPublished:
      'Þú munt endursetja breytingar á þessari færslu í útgefna stöðu. Ertu viss?',
    aboutToUnpublish: 'Þú munt taka þessa færslu úr birtingu. Ertu viss?',
    aboutToUnpublishSelection: 'Þú munt taka úr birtingu allar valdar {{label}}. Ertu viss?',
    autosave: 'Sjálfvirk vistun',
    autosavedSuccessfully: 'Sjálfvirk vistun tókst.',
    autosavedVersion: 'Sjálfvirkt vistuð útgáfa',
    changed: 'Breytt',
    compareVersion: 'Bera útgáfu saman við:',
    confirmPublish: 'Staðfesta útgáfu',
    confirmRevertToSaved: 'Staðfesta endurheimt í vistað',
    confirmUnpublish: 'Staðfesta afbirtingu',
    confirmVersionRestoration: 'Staðfesta útgáfu endurheimt',
    currentDocumentStatus: 'Núverandi {{docStatus}} færslu',
    currentDraft: 'Núverandi uppkast',
    currentPublishedVersion: 'Núverandi útgefin útgáfa',
    draft: 'Uppkast',
    draftSavedSuccessfully: 'Uppkast vistað.',
    lastSavedAgo: 'Síðast vistað fyrir {{distance}} síðan',
    noFurtherVersionsFound: 'Engar fleiri útgáfur fundust',
    noRowsFound: 'Engar {{label}} fundust',
    noRowsSelected: 'Engar {{label}} valdar',
    preview: 'Forskoðun',
    previouslyPublished: 'Áður útgefið',
    problemRestoringVersion: 'Villa kom upp við að endurheimta útgáfu.',
    publish: 'Gefa út',
    publishChanges: 'Gefa út breytingar',
    published: 'Útgefið',
    publishIn: 'Útgefið í {{locale}}',
    publishing: 'Gef út',
    restoreAsDraft: 'Endurheimta sem uppkast',
    restoredSuccessfully: 'Endurheimt tókst.',
    restoreThisVersion: 'Endurheimta þessa útgáfu',
    restoring: 'Endurheimti...',
    reverting: 'Sný aftur...',
    revertToPublished: 'Snúa aftur í útgefna',
    saveDraft: 'Vista uppkast',
    selectLocales: 'Veldu tungumál til að birta',
    selectVersionToCompare: 'Veldu útgáfu til að bera saman við',
    showingVersionsFor: 'Sýni útgáfur fyrir:',
    showLocales: 'Birta tungumál:',
    status: 'Staða',
    unpublish: 'Taka úr birtingu',
    unpublishing: 'Tek úr birtingu...',
    version: 'Útgáfa',
    versionCount_many: '{{count}} útgáfur fundust',
    versionCount_none: 'Engar útgáfur fundust',
    versionCount_one: '{{count}} útgáfa fannst',
    versionCount_other: '{{count}} útgáfur fundust',
    versionCreatedOn: '{{version}} skráð:',
    versionID: 'Útgáfu ID',
    versions: 'Útgáfur',
    viewingVersion: 'Skoða útgáfu fyrir {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Skoða útgáfu fyrir {{entityLabel}}',
    viewingVersions: 'Skoða útgáfur fyrir {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Skoða útgáfur fyrir {{entityLabel}}',
  },
}

export const is: Language = {
  dateFNSKey: 'is',
  translations: isTranslations,
}
