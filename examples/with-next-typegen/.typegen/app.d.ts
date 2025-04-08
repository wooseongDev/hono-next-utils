import * as hono_hono_base from 'hono/hono-base';
import * as hono_utils_http_status from 'hono/utils/http-status';
import * as hono_types from 'hono/types';

declare const app: hono_hono_base.HonoBase<hono_types.BlankEnv, {
    "/api/route1/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: true;
                field1: "field1";
                field2: 2;
                field3: true;
                field4: [1, 2, "3"];
                field5: {
                    readonly a: 1;
                    readonly b: "2";
                    readonly c: [3];
                };
                field6: null;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route2/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route3/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route4/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route5/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route6/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route7/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route8/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route9/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route10/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route11/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route12/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route13/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route14/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route15/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route16/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route17/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route18/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route19/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route20/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route21/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route22/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route23/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route24/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route25/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route26/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route27/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route28/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route29/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route30/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route31/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route32/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route33/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route34/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route35/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route36/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route37/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route38/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route39/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route40/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route41/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route42/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route43/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route44/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route45/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route46/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route47/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route48/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route49/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route50/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route51/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route52/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route53/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route54/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route55/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route56/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route57/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route58/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route59/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route60/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route61/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route62/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route63/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route64/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route65/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route66/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route67/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route68/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route69/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route70/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route71/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route72/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route73/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route74/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route75/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route76/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route77/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route78/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route79/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route80/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route81/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route82/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route83/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route84/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route85/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route86/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route87/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route88/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route89/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route90/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route91/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route92/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route93/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route94/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route95/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route96/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route97/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route98/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route99/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route100/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route101/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route102/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route103/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route104/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route105/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route106/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route107/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route108/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route109/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route110/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route111/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route112/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route113/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route114/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route115/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route116/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route117/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route118/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route119/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route120/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route121/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route122/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route123/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route124/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route125/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route126/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route127/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route128/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route129/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route130/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route131/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route132/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route133/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route134/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route135/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route136/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route137/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route138/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route139/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route140/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route141/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route142/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route143/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route144/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route145/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route146/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route147/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route148/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route149/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route150/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route151/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route152/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route153/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route154/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route155/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route156/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route157/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route158/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route159/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route160/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route161/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route162/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route163/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route164/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route165/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route166/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route167/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route168/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route169/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route170/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route171/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route172/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route173/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route174/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route175/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route176/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route177/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route178/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route179/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route180/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route181/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route182/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route183/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route184/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route185/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route186/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route187/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route188/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route189/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route190/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route191/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route192/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route193/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route194/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route195/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route196/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route197/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route198/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route199/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/api/route200/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                ok: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
}, "/api">;
type App = typeof app;

export { type App, app };
