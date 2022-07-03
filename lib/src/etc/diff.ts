
import * as api from "pareto-diff-api"
import * as diff from "diff"

export function diffLines(oldStr: string, newStr: string, options?: api.LinesOptions): api.Change[] {
    return diff.diffLines(oldStr, newStr, options)
}
