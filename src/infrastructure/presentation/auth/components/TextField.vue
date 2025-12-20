<script>
    interface Props {
        model: string;
        label:string;
        type: string;
        placeholder: string;
        required: boolean;
        error: string;
    }
</script>

<template>
    <div class="text-field">
        <label class="label">
            {{ label }}
            <span v-if="required" class="required">*</span>
        </label>

        <input
            v-model="value"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            class="input"
            :class="{ 'input-error': error}"
        >

        <span v-if="error" class="error-message">{{ error }}</span>
    </div>
</template>

<style scoped>
    
</style>