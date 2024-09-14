// describe('Demo API Test', () => {
//     const baseURL = "https://api.trello.com";
//     const apiKey = "";
//     const apiToken = "";
//     let boardId;

//     it('Creating new Trello board', () => {
//         cy.request({
//             method: "POST",
//             url: baseURL + "/1/boards",
//             qs: {
//                 name: "My first board",
//                 key: apiKey,
//                 token: apiToken,
//             }
//         }).then((response) => {
//             const res = response.body;
//             boardId = res.id;
//             expect(response.status).to.eql(200);
//         });
//     });

//     it('Getting the created Trello board', () => {
//         cy.request({
//             method: "GET",
//             url: `${baseURL}/1/boards/${boardId}`,
//             qs: {
//                 key: apiKey,
//                 token: apiToken,
//             }
//         }).then((response) => {
//             expect(response.status).to.eql(200);
//             expect(response.body.id).to.eql(boardId);
//             expect(response.body.name).to.eql("My first board");
//         });
//     });

//     it('Updating the Trello board name', () => {
//         cy.request({
//             method: "PUT",
//             url: `${baseURL}/1/boards/${boardId}`,
//             qs: {
//                 name: "Updated Board Name",
//                 key: apiKey,
//                 token: apiToken,
//             }
//         }).then((response) => {
//             expect(response.status).to.eql(200);
//             expect(response.body.name).to.eql("Updated Board Name");
//         });
//     });

//     it('Deleting the Trello board', () => {
//         cy.request({
//             method: "DELETE",
//             url: `${baseURL}/1/boards/${boardId}`,
//             qs: {
//                 key: apiKey,
//                 token: apiToken,
//             }
//         }).then((response) => {
//             expect(response.status).to.eql(200);
//         });
//     });
// });
