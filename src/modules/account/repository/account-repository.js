const accountRepo = (httpClient) => ({
  async getAccountById(id) {
    return {
      id,
      name: "Bram Adl",
      username: "bramadl",
      avatar:
        "https://images.unsplash.com/photo-1571618604708-7646a634db93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80",
      posts_count: "20",
      followers_count: "57.8M",
      following_count: "112",
      biodata: (<p>Founder of{" "} <a className="text-[#004C8B]" href="/">@fluxtagency</a></p>),
      website: "https://bramadl.github.io"
    };
  },

  async getPostsById(id) {
    return [
      {
        id: 1,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          }
        ]
      },
      {
        id: 2,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1655241459367-c95abd34d0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          },
          {
            id: 2,
            src: "https://images.unsplash.com/photo-1655214701731-7ef58b86060a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        ]
      },
      {
        id: 3,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1654789460791-74c79093c37e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        ]
      },
      {
        id: 4,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1644982648600-4583461837f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80"
          }
        ]
      },
      {
        id: 5,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1654789203543-094b2a499d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        ]
      },
      {
        id: 6,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          },
          {
            id: 2,
            src: "https://images.unsplash.com/photo-1654789203543-094b2a499d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        ]
      },
      {
        id: 7,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1655238594201-b5975e1427ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          },
          {
            id: 2,
            src: "https://images.unsplash.com/photo-1654789203543-094b2a499d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        ]
      },
      {
        id: 8,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1655211925849-b660e908f7d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        ]
      },
      {
        id: 9,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1638913976954-8f7b612867c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          }
        ]
      },
      {
        id: 10,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1655212681194-fd1932c9b542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        ]
      },
      {
        id: 11,
        galleries: [
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1655143905566-b824848908c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
          }
        ]
      },
    ]
  },

  async viewAccountStory(id) {
    // @TODO: Define a story DTO.
    return [
      {
        id: 1,
        isWatched: true
      }, 
      {
        id: 2,
        isWatched: false
      }, 
    ];
  },

  async getAccountHighlights(id) {
    // @TODO: Define a highlight DTO.
    return [
      {
        id: 1,
        name: "Story 1",
        cover: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
      },
      {
        id: 2,
        name: "Story 2",
        cover: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      },
      {
        id: 3,
        name: "Story 3",
        cover: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1890&q=80",
      },
      {
        id: 4,
        name: "Story 4",
        cover: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ]
  }
});

export default accountRepo;
