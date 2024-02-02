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
        'resources/res-organization',
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
        'extensions/ContactPreference',
        'extensions/MedicationTradeFamily'
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      items: [
        'extensions/overview',
        'release/release',
      ],
    },
    {
      type: 'category',
      label: 'Contact / Feedback',
      items: ['extensions/overview'],
    },
  ]

};

export default sidebars;
