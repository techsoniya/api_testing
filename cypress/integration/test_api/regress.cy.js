
describe('ReqResAPI', () => {
    const baseURL = "https://reqres.in/";
    let id;

    // 1. List Users
    it('List Users', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/users"
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data).to.be.an('array');
        });
    });

    // 2. Single User
    it('Single User', () => {
        cy.request({
            method:"GET",
            url:baseURL+"api/users/2",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response)=>{
            expect(response.status).to.eql(200)
        })
    });
    
    // 3. Single User Not Found
    it('Single User Not Found', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/users/9999",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(404);
        });
    });

    // 4. List Resources
    it('List Resources', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/unknown"
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data).to.be.an('array');
        });
    });

    // 5. Single Resource
    it('Single Resource', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/unknown/2"
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data).to.have.property('name');
            expect(response.body.data).to.have.property('year');
        });
    });

    // 6. Single Resource Not Found
    it('Single Resource Not Found', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/unknown/9999",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(404);
        });
    });

// 7. Create User
it('Create User', () => {
    cy.request({
        method: "POST",
        url: baseURL + "api/users",
        body: {
            "name": "Roshi",
            "job": "leader"
        }
    }).then((response) => {
        expect(response.status).to.eql(201);
        expect(response.body).to.have.property('name', 'Roshi');
        expect(response.body).to.have.property('job', 'leader');
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
    });
});

    // 8. Update User (PUT)
    it('Update User (PUT)', () => {
        cy.request({
            method: "PUT",
            url: baseURL + "api/users/2",
            body: {
                "name": "Roshi Updated",
                "job": "leader"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('name', 'Roshi Updated');
            expect(response.body).to.have.property('job', 'leader');
        });
    });

    // 9. Update User (PATCH)
    it('Update User (PATCH)', () => {
        cy.request({
            method: "PATCH",
            url: baseURL + "api/users/2",
            body: {
                "job": "senior leader"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('job', 'senior leader');
        });
    });

    // 10. Delete User
    it('Delete User', () => {
        cy.request({
            method: "DELETE",
            url: baseURL + "api/users/2"
        }).then((response) => {
            expect(response.status).to.eql(204);
        });
    });

    // 11. Register - Successful
    it('Register - Successful', () => {
        cy.request({
            method: "POST",
            url: baseURL + "api/register",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('token');
        });
    });

    // 12. Register - Unsuccessful
    it('Register - Unsuccessful', () => {
        cy.request({
            method: "POST",
            url: baseURL + "api/register",
            body: {
                "email": "eve.holt@reqres.in"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body.error).to.eql("Missing password");
        });
    });

    // 13. Login - Successful
    it('Login - Successful', () => {
        cy.request({
            method: "POST",
            url: baseURL + "api/login",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('token');
        });
    });

    // 14. Login - Unsuccessful
    it('Login - Unsuccessful', () => {
        cy.request({
            method: "POST",
            url: baseURL + "api/login",
            body: {
                "email": "eve.holt@reqres.in"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body.error).to.eql("Missing password");
        });
    });

    // 15. Delayed Response
    it('Delayed Response', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/users?delay=3"
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data).to.be.an('array');
        });
    });
});















