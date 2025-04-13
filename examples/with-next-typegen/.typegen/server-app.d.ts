import * as hono_hono_base from 'hono/hono-base';
import * as hono_utils_http_status from 'hono/utils/http-status';
import * as hono_types from 'hono/types';

declare const app: hono_hono_base.HonoBase<hono_types.BlankEnv, {
    "/api/example": {
        $get: {
            input: {};
            output: {
                sum: number;
                storage: string | undefined;
                field1: number;
                field2: string;
                field3: boolean;
                field5: null;
                field7: never[];
                field8: number[];
                field9: number[][];
                field10: {};
                field11: {
                    a: {
                        b: number;
                    };
                    c: number[];
                };
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} | hono_types.MergeSchemaPath<{
    "/route1/:id": {
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
    "/route2/:id": {
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
    "/route3/:id": {
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
    "/route4/:id": {
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
    "/route5/:id": {
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
    "/route6/:id": {
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
    "/route7/:id": {
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
    "/route8/:id": {
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
    "/route9/:id": {
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
    "/route10/:id": {
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
    "/route11/:id": {
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
    "/route12/:id": {
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
    "/route13/:id": {
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
    "/route14/:id": {
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
    "/route15/:id": {
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
    "/route16/:id": {
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
    "/route17/:id": {
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
    "/route18/:id": {
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
    "/route19/:id": {
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
    "/route20/:id": {
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
    "/route21/:id": {
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
    "/route22/:id": {
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
    "/route23/:id": {
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
    "/route24/:id": {
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
    "/route25/:id": {
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
    "/route26/:id": {
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
    "/route27/:id": {
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
    "/route28/:id": {
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
    "/route29/:id": {
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
    "/route30/:id": {
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
    "/route31/:id": {
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
    "/route32/:id": {
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
    "/route33/:id": {
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
    "/route34/:id": {
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
    "/route35/:id": {
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
    "/route36/:id": {
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
    "/route37/:id": {
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
    "/route38/:id": {
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
    "/route39/:id": {
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
    "/route40/:id": {
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
    "/route41/:id": {
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
    "/route42/:id": {
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
    "/route43/:id": {
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
    "/route44/:id": {
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
    "/route45/:id": {
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
    "/route46/:id": {
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
    "/route47/:id": {
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
    "/route48/:id": {
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
    "/route49/:id": {
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
    "/route50/:id": {
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
    "/route51/:id": {
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
    "/route52/:id": {
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
    "/route53/:id": {
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
    "/route54/:id": {
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
    "/route55/:id": {
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
    "/route56/:id": {
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
    "/route57/:id": {
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
    "/route58/:id": {
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
    "/route59/:id": {
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
    "/route60/:id": {
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
    "/route61/:id": {
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
    "/route62/:id": {
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
    "/route63/:id": {
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
    "/route64/:id": {
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
    "/route65/:id": {
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
    "/route66/:id": {
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
    "/route67/:id": {
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
    "/route68/:id": {
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
    "/route69/:id": {
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
    "/route70/:id": {
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
    "/route71/:id": {
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
    "/route72/:id": {
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
    "/route73/:id": {
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
    "/route74/:id": {
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
    "/route75/:id": {
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
    "/route76/:id": {
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
    "/route77/:id": {
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
    "/route78/:id": {
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
    "/route79/:id": {
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
    "/route80/:id": {
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
    "/route81/:id": {
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
    "/route82/:id": {
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
    "/route83/:id": {
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
    "/route84/:id": {
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
    "/route85/:id": {
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
    "/route86/:id": {
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
    "/route87/:id": {
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
    "/route88/:id": {
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
    "/route89/:id": {
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
    "/route90/:id": {
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
    "/route91/:id": {
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
    "/route92/:id": {
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
    "/route93/:id": {
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
    "/route94/:id": {
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
    "/route95/:id": {
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
    "/route96/:id": {
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
    "/route97/:id": {
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
    "/route98/:id": {
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
    "/route99/:id": {
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
    "/route100/:id": {
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
    "/route101/:id": {
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
    "/route102/:id": {
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
    "/route103/:id": {
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
    "/route104/:id": {
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
    "/route105/:id": {
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
    "/route106/:id": {
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
    "/route107/:id": {
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
    "/route108/:id": {
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
    "/route109/:id": {
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
    "/route110/:id": {
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
    "/route111/:id": {
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
    "/route112/:id": {
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
    "/route113/:id": {
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
    "/route114/:id": {
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
    "/route115/:id": {
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
    "/route116/:id": {
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
    "/route117/:id": {
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
    "/route118/:id": {
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
    "/route119/:id": {
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
    "/route120/:id": {
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
    "/route121/:id": {
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
    "/route122/:id": {
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
    "/route123/:id": {
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
    "/route124/:id": {
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
    "/route125/:id": {
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
    "/route126/:id": {
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
    "/route127/:id": {
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
    "/route128/:id": {
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
    "/route129/:id": {
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
    "/route130/:id": {
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
    "/route131/:id": {
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
    "/route132/:id": {
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
    "/route133/:id": {
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
    "/route134/:id": {
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
    "/route135/:id": {
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
    "/route136/:id": {
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
    "/route137/:id": {
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
    "/route138/:id": {
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
    "/route139/:id": {
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
    "/route140/:id": {
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
    "/route141/:id": {
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
    "/route142/:id": {
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
    "/route143/:id": {
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
    "/route144/:id": {
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
    "/route145/:id": {
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
    "/route146/:id": {
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
    "/route147/:id": {
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
    "/route148/:id": {
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
    "/route149/:id": {
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
    "/route150/:id": {
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
    "/route151/:id": {
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
    "/route152/:id": {
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
    "/route153/:id": {
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
    "/route154/:id": {
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
    "/route155/:id": {
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
    "/route156/:id": {
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
    "/route157/:id": {
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
    "/route158/:id": {
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
    "/route159/:id": {
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
    "/route160/:id": {
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
    "/route161/:id": {
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
    "/route162/:id": {
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
    "/route163/:id": {
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
    "/route164/:id": {
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
    "/route165/:id": {
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
    "/route166/:id": {
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
    "/route167/:id": {
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
    "/route168/:id": {
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
    "/route169/:id": {
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
    "/route170/:id": {
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
    "/route171/:id": {
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
    "/route172/:id": {
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
    "/route173/:id": {
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
    "/route174/:id": {
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
    "/route175/:id": {
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
    "/route176/:id": {
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
    "/route177/:id": {
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
    "/route178/:id": {
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
    "/route179/:id": {
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
    "/route180/:id": {
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
    "/route181/:id": {
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
    "/route182/:id": {
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
    "/route183/:id": {
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
    "/route184/:id": {
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
    "/route185/:id": {
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
    "/route186/:id": {
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
    "/route187/:id": {
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
    "/route188/:id": {
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
    "/route189/:id": {
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
    "/route190/:id": {
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
    "/route191/:id": {
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
    "/route192/:id": {
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
    "/route193/:id": {
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
    "/route194/:id": {
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
    "/route195/:id": {
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
    "/route196/:id": {
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
    "/route197/:id": {
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
    "/route198/:id": {
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
    "/route199/:id": {
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
    "/route200/:id": {
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
}, "/api/v1"> | hono_types.MergeSchemaPath<{
    "/route1/:id": {
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
    "/route2/:id": {
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
    "/route3/:id": {
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
    "/route4/:id": {
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
    "/route5/:id": {
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
    "/route6/:id": {
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
    "/route7/:id": {
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
    "/route8/:id": {
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
    "/route9/:id": {
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
    "/route10/:id": {
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
    "/route11/:id": {
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
    "/route12/:id": {
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
    "/route13/:id": {
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
    "/route14/:id": {
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
    "/route15/:id": {
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
    "/route16/:id": {
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
    "/route17/:id": {
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
    "/route18/:id": {
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
    "/route19/:id": {
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
    "/route20/:id": {
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
    "/route21/:id": {
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
    "/route22/:id": {
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
    "/route23/:id": {
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
    "/route24/:id": {
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
    "/route25/:id": {
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
    "/route26/:id": {
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
    "/route27/:id": {
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
    "/route28/:id": {
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
    "/route29/:id": {
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
    "/route30/:id": {
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
    "/route31/:id": {
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
    "/route32/:id": {
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
    "/route33/:id": {
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
    "/route34/:id": {
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
    "/route35/:id": {
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
    "/route36/:id": {
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
    "/route37/:id": {
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
    "/route38/:id": {
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
    "/route39/:id": {
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
    "/route40/:id": {
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
    "/route41/:id": {
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
    "/route42/:id": {
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
    "/route43/:id": {
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
    "/route44/:id": {
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
    "/route45/:id": {
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
    "/route46/:id": {
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
    "/route47/:id": {
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
    "/route48/:id": {
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
    "/route49/:id": {
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
    "/route50/:id": {
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
    "/route51/:id": {
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
    "/route52/:id": {
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
    "/route53/:id": {
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
    "/route54/:id": {
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
    "/route55/:id": {
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
    "/route56/:id": {
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
    "/route57/:id": {
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
    "/route58/:id": {
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
    "/route59/:id": {
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
    "/route60/:id": {
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
    "/route61/:id": {
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
    "/route62/:id": {
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
    "/route63/:id": {
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
    "/route64/:id": {
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
    "/route65/:id": {
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
    "/route66/:id": {
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
    "/route67/:id": {
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
    "/route68/:id": {
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
    "/route69/:id": {
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
    "/route70/:id": {
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
    "/route71/:id": {
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
    "/route72/:id": {
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
    "/route73/:id": {
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
    "/route74/:id": {
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
    "/route75/:id": {
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
    "/route76/:id": {
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
    "/route77/:id": {
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
    "/route78/:id": {
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
    "/route79/:id": {
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
    "/route80/:id": {
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
    "/route81/:id": {
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
    "/route82/:id": {
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
    "/route83/:id": {
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
    "/route84/:id": {
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
    "/route85/:id": {
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
    "/route86/:id": {
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
    "/route87/:id": {
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
    "/route88/:id": {
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
    "/route89/:id": {
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
    "/route90/:id": {
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
    "/route91/:id": {
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
    "/route92/:id": {
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
    "/route93/:id": {
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
    "/route94/:id": {
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
    "/route95/:id": {
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
    "/route96/:id": {
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
    "/route97/:id": {
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
    "/route98/:id": {
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
    "/route99/:id": {
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
    "/route100/:id": {
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
    "/route101/:id": {
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
    "/route102/:id": {
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
    "/route103/:id": {
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
    "/route104/:id": {
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
    "/route105/:id": {
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
    "/route106/:id": {
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
    "/route107/:id": {
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
    "/route108/:id": {
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
    "/route109/:id": {
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
    "/route110/:id": {
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
    "/route111/:id": {
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
    "/route112/:id": {
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
    "/route113/:id": {
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
    "/route114/:id": {
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
    "/route115/:id": {
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
    "/route116/:id": {
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
    "/route117/:id": {
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
    "/route118/:id": {
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
    "/route119/:id": {
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
    "/route120/:id": {
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
    "/route121/:id": {
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
    "/route122/:id": {
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
    "/route123/:id": {
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
    "/route124/:id": {
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
    "/route125/:id": {
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
    "/route126/:id": {
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
    "/route127/:id": {
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
    "/route128/:id": {
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
    "/route129/:id": {
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
    "/route130/:id": {
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
    "/route131/:id": {
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
    "/route132/:id": {
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
    "/route133/:id": {
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
    "/route134/:id": {
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
    "/route135/:id": {
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
    "/route136/:id": {
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
    "/route137/:id": {
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
    "/route138/:id": {
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
    "/route139/:id": {
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
    "/route140/:id": {
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
    "/route141/:id": {
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
    "/route142/:id": {
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
    "/route143/:id": {
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
    "/route144/:id": {
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
    "/route145/:id": {
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
    "/route146/:id": {
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
    "/route147/:id": {
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
    "/route148/:id": {
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
    "/route149/:id": {
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
    "/route150/:id": {
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
    "/route151/:id": {
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
    "/route152/:id": {
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
    "/route153/:id": {
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
    "/route154/:id": {
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
    "/route155/:id": {
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
    "/route156/:id": {
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
    "/route157/:id": {
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
    "/route158/:id": {
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
    "/route159/:id": {
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
    "/route160/:id": {
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
    "/route161/:id": {
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
    "/route162/:id": {
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
    "/route163/:id": {
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
    "/route164/:id": {
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
    "/route165/:id": {
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
    "/route166/:id": {
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
    "/route167/:id": {
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
    "/route168/:id": {
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
    "/route169/:id": {
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
    "/route170/:id": {
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
    "/route171/:id": {
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
    "/route172/:id": {
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
    "/route173/:id": {
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
    "/route174/:id": {
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
    "/route175/:id": {
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
    "/route176/:id": {
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
    "/route177/:id": {
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
    "/route178/:id": {
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
    "/route179/:id": {
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
    "/route180/:id": {
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
    "/route181/:id": {
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
    "/route182/:id": {
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
    "/route183/:id": {
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
    "/route184/:id": {
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
    "/route185/:id": {
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
    "/route186/:id": {
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
    "/route187/:id": {
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
    "/route188/:id": {
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
    "/route189/:id": {
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
    "/route190/:id": {
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
    "/route191/:id": {
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
    "/route192/:id": {
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
    "/route193/:id": {
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
    "/route194/:id": {
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
    "/route195/:id": {
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
    "/route196/:id": {
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
    "/route197/:id": {
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
    "/route198/:id": {
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
    "/route199/:id": {
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
    "/route200/:id": {
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
}, "/api/v2">, "/api">;
type App = typeof app;

export { type App, app };
