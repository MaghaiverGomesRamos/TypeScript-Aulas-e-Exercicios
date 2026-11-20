function fazerRequisicao(url: string, method: "POST" | "GET"){
    //........
}

// // type Methods = "GET" | "POST";

// // let url = "https://google.com.br";
// // let method: Methods = "GET";

// fazerRequisicao(url, method)    

type RequestDetails = {
    url: string,
    method: "GET" | "POST"
}

let req: RequestDetails = {
    url: "https://google.com.br",
    method: "GET"
}

fazerRequisicao(req.url, req.method)
