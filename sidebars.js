const sidebars = {
  sdkSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/included-resources',
        'resources/res-location',
        'resources/res-medication',
        'resources/res-medicationAdministration',
        'resources/res-medicationDispense',
        'resources/res-patient',
        'resources/res-practitioner',
        'resources/res-practitionerRole'
      ],
    },
    {
      type: 'category',
      label: 'Extensions',
      items: [
        'extensions/overview',
        'extensions/BirthPlace',
        'extensions/BirthSex',
        'extensions/BirthTime',
        'extensions/CadavericDonor',
        'extensions/ContactPreference',
        'extensions/ContactRank',
        'extensions/DeathNotification',
        'extensions/EthnicCategory',
        'extensions/InterpreterRequired',
        'extensions/MedicationTradeFamily',
        'extensions/ResidentialStatus'
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      items: [
        'release/sdkVersions',
        'release/backlog',

      ],
    },
    'contact',
    'installation'
  ]

};

export default sidebars;
