# Stage 1: Base
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Stage 2: Install dependencies
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
# Note: Use bun.lockb if that is what your version of Bun generated
RUN cd /temp/dev && bun install --frozen-lockfile

# Stage 3: Build the application
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
ENV NODE_ENV=production
# Next.js build happens here
RUN bun run build

# Stage 4: Production Runner
FROM base AS release
COPY --from=install /temp/dev/node_modules node_modules
# Copy the Next.js build output and public assets
COPY --from=prerelease /usr/src/app/public ./public
COPY --from=prerelease /usr/src/app/.next ./.next
COPY --from=prerelease /usr/src/app/package.json .
COPY --from=prerelease /usr/src/app/next.config.ts .

# Set environment to production
ENV NODE_ENV=production

USER bun
EXPOSE 3000/tcp
# Ensure "start" in package.json is "next start"
ENTRYPOINT [ "bun", "run", "start" ]