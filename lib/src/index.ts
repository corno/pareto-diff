
import * as api from "pareto-diff-api"
import { diffLines } from "./etc/diff"

export function init(): api.API {
    return {
        diffLines: diffLines
    }
}