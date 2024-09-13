const data = [
  {
    key: 'folder1',
    title: 'Folder1',
    isFolder: true,
    children: [
      {
        key: 'folder1_folder2',
        title: 'Folder2',
        isFolder: true,
        children: [
          {
            key: 'folder1_folder2_folder3',
            title: 'Folder3',
            isFolder: true,
            children: [
              {
                key: 'folder1_folder2_folder3_folder4',
                title: 'Folder4',
                isFolder: true,
                children: [
                  {
                    key: 'folder1_folder2_folder3_folder4_file1',
                    title: 'File1',
                    isFolder: false,
                    children: [], // Added empty children array
                  },
                  {
                    key: 'folder1_folder2_folder3_folder4_file2',
                    title: 'File2',
                    isFolder: false,
                    children: [], // Added empty children array
                  },
                ],
              },
              {
                key: 'folder1_folder2_folder3_file1',
                title: 'File1',
                isFolder: false,
                children: [], // Added empty children array
              },
            ],
          },
          {
            key: 'folder1_folder2_file1',
            title: 'File1',
            isFolder: false,
            children: [], // Added empty children array
          },
        ],
      },
      {
        key: 'folder1_file1',
        title: 'File1',
        isFolder: false,
        children: [], // Added empty children array
      },
    ],
  },
];

export default data;

//the entire code is under the assumption the data coming will be having top onl one root folder
