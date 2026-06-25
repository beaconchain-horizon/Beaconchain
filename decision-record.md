# Decision Record

## HZ-D-001: Use Conventional Commits for Commit Message Formatting

### Status

Accepted – proposed by @MahdiAmolimoghaddam

### Context

Currently, commit messages in the project are not formatted in a standard way. This makes collaboration more difficult, especially when resolving merge conflicts, using line blaming, reverting changes, and understanding the project history. It also complicates the creation of release notes.

### Decision

We are using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

### Consequences

1. Commit messages **MUST** be formatted in the Conventional Commits style.
2. Every change that belongs together **SHOULD** be part of one commit.
3. Commits like `implement review feedback` or `make linter happy` are **NOT allowed**.
4. Teams (e.g., frontend, backend, mobile) **SHOULD** define guidelines for:
   - **Types** – teams **SHOULD** stick to the [default set](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)
   - **Scopes**
5. One pull request **MAY** contain multiple commits.
6. Every Pull Request **SHOULD** have at least one commit with a Footer that includes an issue number (e.g., `HZ-XXX`).
7. Every Branch **SHOULD** include the issue number as a prefix (e.g., `HZ-XXX/branch-name`).
8. Before merging into `staging`, all commits **MUST** be rebased.

### References

1. [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
2. [Conventional Commits Cheat Sheet](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
3. [Git Usage Example](https://chatgpt.com/c/6728dfa8-806c-800e-b1da-4b6129ecd3aa)

---

## 📝 Template for New Decisions

```markdown
# Decision Record

## HZ-D-XXX: Short Title of the Problem and Solution

### Status

proposed | rejected | accepted | deprecated | superseded by HZ-D-XXX

### Context

What is the issue that we're seeing that is motivating this decision or change?

### Decision

What is the change that we are proposing and/or doing?

### Consequences

What becomes easier or more difficult to do because of this change?

### References

1. [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) - Michael Nygard