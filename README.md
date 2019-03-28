# Nile: E-Commerce Site



## Workflow
#### Regular Workflow

On a day-to-day basis, your team will follow a feature branching workflow. Each
time you want to create a new feature for your app, you’ll go through the
following stages.

##### Creating a New Feature Branch

1. Check out your `development` branch (`git checkout development`)

2. Ensure that `development` is up to date with the `development` branch on
  GitHub by running `git pull origin development`.

3. Create and check out a new feature branch using `git checkout -b
  my-feature-branch`

##### Integrating a Feature

1. After you’re done working on the branch, check in with your team and let them
  know that you’re ready to integrate your feature.

2. Because `development` may have been updated in the time since the feature
  branch was created, it’s important to make sure that the new feature doesn’t
  conflict with anything. Run `git checkout development` and `git pull origin
  development` to make sure that your `development` branch incorporates any
  updates that were made on the repo on GitHub. Then, run `git checkout
  my-feature-branch` and `git rebase development` to rebase your new feature on
  top of the (updated) `development` branch.

3. If any conflicts were introduced in the previous step,
  work through the code **with your team** and resolve each one;
  when you finish, make a commit.

4. Now that your branch has been rebased, and you’re ready to integrate it,
  push your branch up to GitHub with `git push origin my-feature-branch`
  and then create a pull request (within your GitHub repo)
  from your feature branch to the `development` branch.

5. As a team, review the pull request, confirm whether or not
  it can be merged in automatically, and decide whether or not
  to approve the pull request.

  If there are merge conflicts preventing an automatic merge,
  a member of your team will need to resolve those conflicts manually
  on their machine, and then push the newly updated `development` branch
  back up to GitHub.

Once `development` has been updated, other members of the team
will need to rebase their own feature branches on it (as described in Step 2)
before they push up those feature branches up to GitHub.

What if you want to know about remote branches, such as a feature branch that
someone else is working on? You might want to pull down a feature branch to
test it locally, for example.

Each team member can learn about what exists on the remote. This can be done
with `git fetch origin`. Then, your local git knows about remote branches that
may not have existed when you first cloned the repo.
`git checkout <some-new-branch>` will now be set up as a new branch that tracks
the remote feature branch. Without the fetch, the local git will not know
anything about origin’s branches.

##### Deploying a Working App

Work through the following steps as a team.

1. Have one member of the team check out `development`
    and pull down the latest version from GitHub.

2. For this version, check and make sure that the application is working.
    If you have tests, run them.

3. When you’re satisfied that the app is ready to deploy,
    check out the `master` branch and run `git merge development`.

4. Push the finished version of your code up to GitHub
    (`git push origin master`).

5. Deploy!
