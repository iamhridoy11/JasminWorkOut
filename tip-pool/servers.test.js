describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add new server with empty value', function(){
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update server table and updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();

    let info = document.querySelectorAll("#serverTable tbody tr td");
    expect(info.length).toEqual(2);


    expect(info[0].innerText).toEqual("Alice");
    expect(info[1].innerText).toEqual("$0.00");
    expect(info[2].innerText).toEqual("X");
  })

  afterEach(function() {
    // teardown logic

    serverId = 0;
    serverTbody.innerText = "";
    allServers = {};
  });
});
